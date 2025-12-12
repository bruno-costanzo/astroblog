---
title: 'Los bugs también enamoran'
pubDate: 2025-12-10
description: 'Cómo un bug en las rutas de nuestra aplicación se convirtió en una feature que los usuarios adoptaron sin saberlo.'
author: 'Bruno Costanzo'
image:
    url: '/los-bugs-enamoran.webp'
    alt: 'Los bugs también enamoran'
tags: ["rails", "bugs", "experiencia"]
---

Siempre viví en casas viejas y hay algo a lo que le tengo cierto apego culposo: las cosas que dejaron de funcionar como debían y pasaron a funcionar con algún truquito, un parche que funciona como un código secreto entre los que conocemos el artefacto. Puertas y ventanas que a la vista parecen trabadas, pero hay que hacer cierto movimiento y la magia ocurre; cadenas de inodoros que si el botón no se aprieta de cierta manera quedan perdiendo agua; o llaves que solo una persona puede hacer girar. En nuestras aplicaciones sucede lo mismo, pero no es tan placentero. La gente comienza a utilizar algo que funciona, pero tiene un error en la implementación. Entonces cambiarlo se puede volver difícil y hasta peligroso, porque podemos romper algo que muchos usuarios ya están utilizando.

Recientemente, tuvimos un problema así en una de las aplicaciones en las que estábamos trabajando. Los usuarios podían gestionar distintos tipos de documentos y carpetas, donde podían anidar más carpetas y documentos dentro de ellas. Sin embargo, teníamos un error en cómo estábamos gestionando las rutas de los recursos:

- `GET /documents/:key/edit` apuntaba a la edición del documento
- `DELETE /documents/:key` apuntaba a la eliminación del documento
- `POST /documents/:key` apuntaba a la creación de un nuevo documento

Pero:

- `GET /documents/:key`, en lugar de ir al documento con el ID `:key`, buscaba la carpeta con el ID `:key`

Esto significa que, por algún motivo, habíamos dejado de tener las rutas RESTful adecuadas. La solución era bastante sencilla: simplemente modificamos la forma en la que se puede acceder a una carpeta:

- `GET /documents/browse/:dirpath`

Con este cambio, ya podíamos disponer de las rutas RESTful adecuadas:

- `GET /documents/:key` apuntaba a la obtención del documento con el ID `:key`

Hicimos los tests correspondientes (todo funcionaba perfectamente), hicimos el deploy a staging e hicimos QA, y finalmente hicimos el deploy a producción.

Pero como ya les advertí: la gente se enamora de nuestras features, pero también de nuestros bugs y de nuestra deuda técnica. Y los reclamos no tardaron en llegar: mucha gente tenía links a documentos y carpetas con la vieja estructura de rutas, y esos enlaces estaban en documentos importantes como protocolos de operación y procedimientos. Agregando `/browse` para las carpetas, todos los enlaces de carpetas estaban rotos, ya que ahora trataba de encontrar un documento con el ID `:key`, pero ese `:key` era en realidad el nombre de una carpeta.

Para solucionar esto, tuvimos que buscar un cambio que asegurara la compatibilidad con los enlaces antiguos. Una posible solución sería agregar una redirección temporal para los enlaces antiguos que apuntan a carpetas:

- `GET /documents/:key` → `/documents/browse/:key`

Sin embargo, esto no es tan sencillo y no se ve tan bien en el código, porque puede pasar que el usuario sí esté queriendo acceder a un documento. Entonces podíamos tratar de buscar un documento con ese ID y, si no lo encontramos, redirigir al usuario a la carpeta correspondiente:

- `GET /documents/:key` → `/documents/browse/:key` si no se encuentra un documento con ese ID

Esto funciona y es una solución aceptable, aunque requiere dejar algunos comentarios en el código explicando por qué existe esa redirección.

```ruby
def show
  if @document = Document.find_by(id: params[:key])
    serve @document
  else
    redirect_to "/documents/browse/#{params[:key]}"
  end
end
```

Sin embargo, nosotros optamos por otra solución. Como nuestros links antiguos (ahora rotos) apuntaban a carpetas, decidimos que lo mejor era dejar esa ruta como estaba y, en su lugar, acceder al documento con una ruta especial:

- `GET /documents/view/:key` → Ver documento con ID `:key`
- `GET /documents/:key` → Ver carpeta con ID `:key`

Esto nos permitió mantener las responsabilidades separadas y evitar confusiones en el código. Sin embargo, perdimos la posibilidad de tener un recurso con las rutas RESTful:

```ruby
resources :documents, except: %i[show index]
get "documents/view/:id" => "documents#show", as: :document
```

No es una solución tan fea ni un problema tan grave. Y por suerte pudimos resolverlo rápidamente. Pero nos llevamos un aprendizaje importante: cambiar una implementación actual que ya está funcionando y siendo utilizada por los usuarios puede tener consecuencias inesperadas, incluso si no hay ningún error en el código. Sea un bug o deuda técnica, los usuarios ya lo han adoptado sin darse cuenta de que había algo mal, y nosotros tenemos que priorizar siempre su experiencia antes que cualquier otra consideración técnica.
