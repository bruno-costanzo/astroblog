// Syncs src/content/opensource with my public PRs and issues on GitHub.
//
//   pnpm os:sync              update the files and print a report
//   pnpm os:sync --dry-run    only print the report
//   pnpm os:sync --publish    update, build, commit and push
import { execFileSync } from "node:child_process";
import { appendFileSync, readFileSync, readdirSync, unlinkSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const AUTHOR = "bruno-costanzo";
const DIR = "src/content/opensource";
const IGNORE_FILE = "scripts/opensource-ignore.txt";
const dryRun = process.argv.includes("--dry-run");
const publish = process.argv.includes("--publish");

const gh = (...args) => JSON.parse(execFileSync("gh", args, { encoding: "utf8", maxBuffer: 64 * 1024 * 1024 }));
const run = (cmd, ...args) => execFileSync(cmd, args, { stdio: "inherit" });

function search(type) {
  const fields = "repository,number,title,state,createdAt,url";
  return gh("search", type, "--author", AUTHOR, "--visibility", "public", "--limit", "1000", "--json", fields).map((item) => ({
    kind: type === "prs" ? "pr" : "issue",
    repo: item.repository.nameWithOwner,
    number: item.number,
    title: item.title,
    state: item.state,
    date: item.createdAt.slice(0, 10),
    url: item.url,
  }));
}

// An issue closed as "completed" counts as fixed; "not_planned" counts as closed.
function issueStatus(item) {
  if (item.state === "open") return "open";
  const reason = gh("api", `repos/${item.repo}/issues/${item.number}`).state_reason;
  return reason === "completed" ? "fixed" : "closed";
}

const status = (item) => (item.kind === "pr" ? item.state : issueStatus(item));
const ref = (item) => `${item.repo}#${item.number}`;

const ignore = readFileSync(IGNORE_FILE, "utf8")
  .split("\n")
  .map((line) => line.trim())
  .filter((line) => line && !line.startsWith("#"));
const ignored = (item) =>
  ignore.some((rule) =>
    rule.endsWith("/*") ? item.repo.startsWith(rule.slice(0, -1)) : rule === item.repo || rule === ref(item),
  );

// Files on the site, keyed by URL
const files = new Map();
for (const name of readdirSync(DIR).filter((name) => name.endsWith(".md"))) {
  const path = join(DIR, name);
  const text = readFileSync(path, "utf8");
  const field = (key) => text.match(new RegExp(`^${key}: (.*)$`, "m"))?.[1];
  files.set(field("url"), { path, text, status: field("status") });
}

function write(item, itemStatus) {
  const name = `${item.kind === "issue" ? "issue-" : ""}${item.repo.split("/")[1]}-${item.number}.md`;
  const title = item.title.replaceAll("\\", "\\\\").replaceAll('"', '\\"');
  const body = [
    "---",
    `title: "${title}"`,
    `kind: ${item.kind}`,
    `repo: ${item.repo}`,
    `url: ${item.url}`,
    `date: ${item.date}`,
    `status: ${itemStatus}`,
    "---",
    "",
  ].join("\n");
  if (!dryRun) writeFileSync(join(DIR, name), body);
}

const report = { merged: [], fixed: [], closed: [], added: [] };
const items = [...search("prs"), ...search("issues")];

for (const item of items) {
  const file = files.get(item.url);

  if (file) {
    if (file.status !== "open" || item.state === "open") continue;
    const next = status(item);
    if (next === "closed") {
      report.closed.push({ ...item, title: `${item.title}  (removed from the site)` });
      if (!dryRun) unlinkSync(file.path);
    } else {
      report[next].push(item);
      if (!dryRun) writeFileSync(file.path, file.text.replace(/^status: open$/m, `status: ${next}`));
    }
    continue;
  }

  if (ignored(item)) continue;
  const next = status(item);
  if (next === "closed") {
    report.closed.push(item);
  } else {
    report.added.push({ ...item, status: next });
    write(item, next);
  }
}

// Remember closed items so the next run does not report them again
if (!dryRun && report.closed.length) {
  appendFileSync(IGNORE_FILE, report.closed.map((item) => `${ref(item)}\n`).join(""));
}

const label = (item) => `${item.kind === "issue" ? "issue" : "PR"} ${ref(item)}  ${item.title}`;
const sections = [
  ["Merged", report.merged],
  ["Fixed (issues)", report.fixed],
  ["Closed without merge", report.closed],
  ["New on the site", report.added.map((item) => ({ ...item, title: `[${item.status}] ${item.title}` }))],
];
let changes = 0;
for (const [heading, list] of sections) {
  if (!list.length) continue;
  changes += list.length;
  console.log(`\n${heading}:`);
  for (const item of list) console.log(`  ${label(item)}`);
}
if (!changes) console.log("No changes.");
if (dryRun) console.log("\n(dry run: no files changed)");

if (publish && changes && !dryRun) {
  run("pnpm", "build");
  run("git", "add", "-A", DIR, IGNORE_FILE);
  run("git", "commit", "-m", "update open source contributions");
  run("git", "push");
}
