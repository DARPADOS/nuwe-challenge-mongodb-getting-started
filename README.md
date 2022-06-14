# MongoDB getting started

[![](https://img.shields.io/badge/nuwe-challenge%20backend-6bc164?style=flat)](https://nuwe.io/challenge/mongodb-getting-started)
_Este repositorio es la solución a un reto de [Nuwe](https://nuwe.io/challenge/mongodb-getting-started)._

Un API en node.js que sirve un crud básico de usuarios. Usa express, mongodb y mongoose.

## Technology Stack

![](https://img.shields.io/badge/-Node.js-fff?style=for-the-badge&logo=node.js&logoColor=83ba63)
![](https://img.shields.io/badge/-Express-fff?style=for-the-badge&logo=express&logoColor=83ba63)
![](https://img.shields.io/badge/-Mongodb-001e2b?style=for-the-badge&logo=mongodb&logoColor=83ba63)

## Tasks

```
  ✅ Task 1 → El servidor se conecta a MongoDB (local o online)

  ✅ Task 2 → Se puede ver el modelo de usuario creado

  ✅ Task 3 → Hay un controlador para crear el usuario

  ✅ Task 4 → Hay un controlador para borrar el usuario

  ✅ Task 5 → Hay un controlador para devolver el usuario

  ✅ Task 6 → Hay un controlador para actualizar el usuario

  ✅ Task 7 → Se puede levantar el servidor y realizar las acciones anteriores
```

## Api

### User Scheme

```js
// Schema
User = {
  username: { type: String, unique: true, required: true },
  age: Number,
  city: String,
};
```

### Methods

#### Register new user

- **Description**: Crea un nuevo usuario y lo guarda en la base de datos.
- **Method & Path**: `[POST] /users`
- **Request Body**:

```json
{
  "username": "Darpa",
  "age": 22,
  "city": "Lima"
}
```

#### Get user by username

- **Description**: Obtiene el objeto de un usuario según el campo username.
- **Method & Path**: `[GET] /users/:username`
- **Path Parameter**: `username=[String]`
- **Response example**:

```json
{
  "_id": "62a8110743a34b714bde9136",
  "username": "Darpa",
  "age": 22,
  "city": "Lima",
  "__v": 0
}
```

#### Update user by username

- **Description**: Actualizar un usuario por el campo username.
- **Method & Path**: `[PUT] /users/:username`
- **Path Parameter**: `username=[String]`
- **Request Body**:

```json
{
  "username": "Darpa22",
  "age": 30,
  "city": "Lima"
}
```

#### Delete user by username

- **Description**: Elimina un usuario de la base de datos por el campo username.
- **Method & Path**: `[DELETE] /users/:username`
- **Path Parameter**: `username=[String]`

## Installation

Primero, clonamos y instalamos el proyecto.

```shell
  git clone https://github.com/DARPADOS/nuwe-challenge-mongodb-getting-started.git

  npm install
```

Luego configuramos la variable de entorno `MONGODB_URL` en el archivo `.env`.

```js
  MONGODB_URL:        //mongodb://mongo:mongo@localhost:27017
```

Para iniciar el servidor puede usar el siguiente comando.

```shell
  npm run dev
```

## Testing

Para probar los endpoints puede [importar](https://docs.insomnia.rest/insomnia/import-export-data#import-data) el documento de insomnia del archivo `Insomnia-test.json` y ejecutar el suite test.

## License

[MIT](https://github.com/DARPADOS/nuwe-challenge-mongodb-getting-started/blob/main/LICENSE)
