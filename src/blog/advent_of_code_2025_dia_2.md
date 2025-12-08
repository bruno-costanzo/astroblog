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

## Part 2

### Consigna

Now, an ID is invalid if it is made only of some sequence of digits repeated at least twice. So, 12341234 (1234 two times), 123123123 (123 three times), 1212121212 (12 five times), and 1111111 (1 seven times) are all invalid IDs.

### Solución

La diferencia con la parte 1 es sutil pero importante. Antes buscábamos números que fueran **exactamente** dos mitades iguales. Ahora buscamos números que sean **cualquier secuencia repetida al menos dos veces**.

Esto significa que `123123123` es inválido porque es `123` repetido 3 veces, aunque no se pueda dividir en dos mitades iguales.

### El cambio de perspectiva

En lugar de solo dividir en 2, necesitamos probar todas las divisiones posibles:
- ¿Se puede dividir en 2 partes iguales?
- ¿Se puede dividir en 3 partes iguales?
- ¿Se puede dividir en 4 partes iguales?
- ... y así sucesivamente

### La implementación

```ruby
def equal_splits(num)
  s = num.to_s
  len = s.length
  results = []

  (2..len).each do |parts|
    next unless (len % parts).zero?

    size = len / parts
    results << s.chars.each_slice(size).map { _1.join.to_i }
  end

  results
end
```

Esta función genera todas las formas posibles de dividir un número en partes iguales. Por ejemplo, para `123123`:
- Con 2 partes: `[123, 123]`
- Con 3 partes: `[12, 31, 23]` - no aplica porque 6/3=2 dígitos cada uno
- Con 6 partes: `[1, 2, 3, 1, 2, 3]`

El truco está en `each_slice(size)` que divide el array de caracteres en grupos del tamaño calculado.

### La verificación final

```ruby
def part_two
  count_matching { |number| equal_splits(number).any? { |split| split.uniq.size == 1 } }
end
```

Para cada división posible, verificamos si todas las partes son iguales usando `uniq.size == 1`. Si después de eliminar duplicados solo queda un elemento, significa que todas las partes eran iguales.

Por ejemplo:
- `[123, 123].uniq` -> `[123]` -> tamaño 1 -> ¡inválido!
- `[12, 34].uniq` -> `[12, 34]` -> tamaño 2 -> válido
