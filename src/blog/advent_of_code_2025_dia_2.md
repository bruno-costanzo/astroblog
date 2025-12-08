---
title: 'Advent of Code 2025: Día 2'
pubDate: 2025-12-08
description: 'Mi solución al segundo día del Advent of Code 2025, encontrando números con mitades iguales dentro de rangos.'
author: 'Bruno Costanzo'
image:
    url: '/elves.png'
    alt: 'Elves'
tags: ["ruby", "advent-of-code", "coding"]
---

Continuando con el [Advent of Code 2025](https://adventofcode.com/2025/day/2), el segundo día nos presenta un problema interesante: encontrar números que se conforman por dos cadenas iguales dentro de un conjunto de rangos.

## Mi proceso de pensamiento

La clave para resolver este tipo de problemas es ser capaces de dividirlo en partes más pequeñas.

### 1. Parsear el input: de string a rangos

El primer problema es transformar el input en una estructura de datos útil. Tenemos un string con rangos separados por comas, donde cada rango tiene un inicio y fin separados por guión:

```
"11-22,95-115" -> [11..22, 95..115]
```

En Ruby podemos hacer esto de forma elegante:

```ruby
def ranges
  @input_data.split(',').map { |range| Range.new(*range.split('-').map(&:to_i)) }
end
```

### 2. Filtrar números con cantidad par de dígitos

La segunda observación es que solo nos interesan números que puedan dividirse exactamente en dos mitades iguales. Esto significa que todos los números con cantidad impar de dígitos quedan descartados automáticamente:

```ruby
str = number.to_s
next unless str.length.even?
```

### 3. Comparar las dos mitades

Finalmente, podemos convertir cada número en una cadena de texto, dividirla en dos y corroborar que ambas partes sean iguales:

```ruby
mid = str.length / 2
str[0...mid].to_i == str[mid..].to_i
```

Por ejemplo:
- `1212` -> `"12"` y `"12"` -> iguales ✓
- `1234` -> `"12"` y `"34"` -> distintos ✗

### Juntando todo

Luego, el problema es solamente iterar sobre cada rango, aplicar estos filtros, y sumar los números que cumplen con la condición.
