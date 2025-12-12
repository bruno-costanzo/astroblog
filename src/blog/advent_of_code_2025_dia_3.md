---
title: 'AoC 2025 Día 3: Escaleras que no escalan'
pubDate: 2025-12-12
description: 'Mi solución al tercer día del Advent of Code 2025, encontrando el joltage máximo de bancos de baterías.'
author: 'Bruno Costanzo'
image:
    url: '/escaleras_que_no_escalan.webp'
    alt: 'Escaleras que no escalan'
tags: ["ruby", "advent-of-code", "coding"]
---

Continuando con el [Advent of Code 2025](https://adventofcode.com/2025/day/3), el tercer día nos presenta un problema que parece simple pero esconde una trampa: encontrar el máximo joltage seleccionando baterías de un banco.

## Mi proceso de pensamiento

La clave para resolver este tipo de problemas es ser capaces de dividirlo en partes más pequeñas. A grandes rasgos, yo veo dos problemas principales:

### 1. Entender la estructura del problema

Cada línea del input representa un "banco" de baterías. Cada dígito es una batería individual con su "joltage" (1-9). El problema nos pide:
- Elegir exactamente 2 baterías de cada banco
- El número resultante es la concatenación de esos dígitos **en el orden en que aparecen**
- Encontrar el máximo joltage posible de cada banco

Por ejemplo, con el banco `12345`:
- Si elegimos las baterías en posición 1 y 3: obtenemos `13`
- Si elegimos las baterías en posición 2 y 5: obtenemos `25`
- El máximo posible sería `45` (eligiendo las dos últimas)

### 2. Generar todas las combinaciones posibles

Ruby tiene un método muy útil para esto: `combination(n)`. Este método genera todas las formas de elegir `n` elementos de un array, **manteniendo el orden original**:

```ruby
"12345".chars.combination(2).to_a
# => [["1", "2"], ["1", "3"], ["1", "4"], ["1", "5"],
#     ["2", "3"], ["2", "4"], ["2", "5"],
#     ["3", "4"], ["3", "5"],
#     ["4", "5"]]
```

Esto es exactamente lo que necesitamos porque el problema dice que no podemos rearreglar las baterías.

### 3. Encontrar el máximo

Una vez que tenemos todas las combinaciones, el problema se reduce a:
1. Convertir cada par a número (concatenando los dígitos)
2. Encontrar el máximo

```ruby
def jolts
  @batteries.combination(2).map { |pair| pair.join.to_i }.max
end
```

Esta solución es más clara que usar `max_by` porque:
- Primero transformamos todas las combinaciones a números con `map`
- Luego buscamos el máximo con `max`
- No repetimos la conversión `.join.to_i` dos veces

### La solución completa

```ruby
class Bank
  def initialize(batteries)
    @batteries = batteries.chars
  end

  def jolts
    @batteries.combination(2).map { |pair| pair.join.to_i }.max
  end
end
```

Luego, el problema es solamente iterar sobre cada banco, calcular su joltage máximo, y sumar todos los resultados.

## Parte 2

### Consigna

Ahora necesitamos formar el joltage más grande posible encendiendo exactamente **12 baterías** de cada banco en lugar de 2.

### Solución

La belleza de haber diseñado bien la Part 1 es que la Part 2 se resuelve casi sin cambios. La única diferencia es el número de baterías a elegir: 12 en lugar de 2.

#### El poder de parametrizar

Si hubiéramos hardcodeado el `2` en nuestro método `jolts`, tendríamos que duplicar código o refactorizar. Pero al usar un parámetro con valor por defecto, la solución es trivial:

```ruby
def jolts(size = 2)
  @batteries.combination(size).map { |digits| digits.join.to_i }.max
end
```

Para la Part 2, simplemente llamamos:

```ruby
def part_two
  @input_data.split("\n").sum { Bank.new(it).jolts(12) }
end
```

#### Por qué funciona igual

El método `combination(n)` de Ruby escala perfectamente:
- `combination(2)` genera pares de números de 2 dígitos
- `combination(12)` genera grupos de 12 números de 12 dígitos

La lógica es idéntica: generar todas las combinaciones posibles, convertirlas a números, y encontrar el máximo. Ruby se encarga del resto.

### El problema: es tremendamente lento

Si ejecutamos esta solución, vamos a esperar... y esperar... y esperar. ¿Qué está pasando?

El problema es la **complejidad combinatoria**. La cantidad de combinaciones se calcula con:

```
C(n, k) = n! / (k! * (n-k)!)
```

Donde `n` es el total de elementos y `k` es cuántos elegimos.

Con nuestras líneas de 100 dígitos:

| k | Combinaciones |
|---|---------------|
| 2 | 4,950 |
| 12 | **1,050,421,051,106,700** |

Con 12 elementos estamos generando más de 1 cuatrillón de combinaciones por línea. La fuerza bruta simplemente no escala.

### La solución: Algoritmo Greedy

En lugar de generar todas las combinaciones y buscar el máximo, podemos **construir** el máximo directamente, eligiendo el mejor dígito en cada paso.

#### La intuición

Para formar el número más grande, queremos que el primer dígito sea lo más grande posible. Luego el segundo, luego el tercero, y así sucesivamente.

Pero hay una restricción: si elegimos un dígito, los siguientes deben venir **después** de él en la secuencia original.

#### El truco clave

En cada paso, no podemos buscar en todos los dígitos restantes.

Si tenemos 15 dígitos y necesitamos elegir 12:
- Para el primer dígito podemos buscar en las posiciones 0 a 3 (las primeras 4)
- ¿Por qué hasta la 3? Porque si elegimos el de la posición 3, nos quedan 11 dígitos (posiciones 4-14) para completar los 11 restantes

La fórmula es: `search_end = total_digitos - digitos_que_aun_necesitamos`

#### Paso a paso con `"234234234234278"`

```
Dígitos:  2 3 4 2 3 4 2 3 4 2 3 4 2 7 8
Índices:  0 1 2 3 4 5 6 7 8 9 10 11 12 13 14
```

**Paso 1**: Necesito 12 dígitos. Busco el máximo entre índices 0-3 (15-12=3)
- Candidatos: `2,3,4,2` -> máximo es `4` en índice 2
- Resultado parcial: `[4]`
- Siguiente búsqueda empieza en índice 3

**Paso 2**: Necesito 11 más. Busco entre índices 3-4 (15-11=4)
- Candidatos: `2,3` -> máximo es `3` en índice 4
- Resultado parcial: `[4,3]`
- Siguiente búsqueda empieza en índice 5

**Paso 3**: Necesito 10 más. Busco entre índices 5-5 (15-10=5)
- Solo candidato: `4`
- Resultado parcial: `[4,3,4]`
- Siguiente búsqueda empieza en índice 6

Y así sucesivamente... Al final obtenemos `434234234278`.

#### El código

```ruby
def jolts_greedy(size)
  selected_digits = []
  search_start = 0

  size.times do |i|
    digits_still_needed = size - i
    search_end = @batteries.length - digits_still_needed

    best_index = find_max_index(search_start, search_end)

    selected_digits << @batteries[best_index]
    search_start = best_index + 1
  end

  selected_digits.join.to_i
end

def find_max_index(from, to)
  (from..to).max_by { |i| @batteries[i] }
end
```

#### La diferencia de rendimiento

- **Fuerza bruta**: O(C(n,k)) = más de 1 cuatrillón de operaciones
- **Greedy**: O(n * k) = 100 * 12 = 1,200 operaciones

Una diferencia de aproximadamente 875 mil millones de veces.

### Reflexión

Este problema es un buen ejemplo de por qué entender la complejidad algorítmica importa. Una solución que funciona perfectamente para `k=2` puede ser completamente inutilizable para `k=12`. La clave está en reconocer cuándo la fuerza bruta no escala y buscar un enfoque más inteligente.
