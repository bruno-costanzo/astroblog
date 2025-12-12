---
title: 'AoC 2025 Día 1: Dando vueltas al problema'
pubDate: 2025-12-07
description: 'Mi solución al primer día del Advent of Code 2025, resolviendo el problema del dial circular.'
author: 'Bruno Costanzo'
image:
    url: '/dial_lock.webp'
    alt: 'Dial lock'
tags: ["ruby", "advent-of-code", "coding"]
---

Este año decidí participar en el [Advent of Code 2025](https://adventofcode.com/2025/day/1). El primer día nos presenta un problema interesante: simular las rotaciones de un dial circular para encontrar una contraseña.

## Mi proceso de pensamiento

La clave para resolver este tipo de problemas es ser capaces de dividirlo. A grandes rasgos, yo veo dos problemas principales:

### 1. La estructura de datos de cada rotación

Está claro que `L18` no es una forma cómoda de trabajar. Como ya lo sabemos desde el enunciado, `L` representa movimientos a la izquierda del dial, lo que significa ir hacia los números más pequeños. Por otro lado, `R` representa movimientos a la derecha del dial, lo que significa ir hacia los números más grandes.

Esto significa que deberíamos transformar nuestros datos:

```
L18 -> -18
R5  -> 5
```

### 2. El dial es circular

El segundo problema es que el dial es circular, lo que significa que cuando llegamos a 0, podemos seguir avanzando y volver a empezar desde el otro extremo. Esto significa que necesitamos usar el operador módulo para calcular la posición final del dial después de cada rotación.

```ruby
dials = 10
initial_position = 5
move = -7
new_position = (5 - 7) % 10
# => 8
```

Este resultado tiene sentido para nosotros, porque si estamos en la posición 5 y restamos 7, la nueva posición es 8.

### Juntando todo

Luego, el problema es solamente ir actualizando el valor del dial en cada iteración y contar la cantidad de veces que el dial está en 0.
