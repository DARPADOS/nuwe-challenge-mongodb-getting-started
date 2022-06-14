# Nuwe challenge - MongoDB getting started
## Resumen
MongoDB es una de las bases de datos no relacionales más utilizadas. Es flexible y bastante fácil de empezar a trabajar con ella. De esta manera, este reto servirá para introducirnos en el mundo de las bases de datos no relacionales. El modelo de usuario con el que se trabajará es el siguiente:

```js
  user={
    username:
  { unique, required }
    age:{ number }
    city:{ string }
  }
```
Los objetivos y tareas que hay que cumplir se pueden observar en la sección User Stories / Objetivos.

## User stories / Objetivos

```
  ✅ Task 1 → El servidor se conecta a MongoDB (local o online)

  ✅ Task 2 → Se puede ver el modelo de usuario creado

  ✅ Task 3 → Hay un controlador para crear el usuario

  ✅ Task 4 → Hay un controlador para borrar el usuario

  ✅ Task 5 → Hay un controlador para devolver el usuario

  ✅ Task 6 → Hay un controlador para actualizar el usuario

  ✅ Task 7 → Se puede levantar el servidor y realizar las acciones anteriores
```