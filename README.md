## curso-vuejs-coderhouse

# Proyecto 3 - Bottino 👩🏻‍💻

Tercer entrega de proyecto final del curso. (8 de julio 2023)
Debes continuar trabajando sobre la entrega intermedia 2, presentada anteriormente.

### Objetivos Generales:

1. Incorporar Vuex.
2. Implementa los datos de actualización en el backend.

### Objetivos Específicos:

1. Integra Vuex a tu proyecto para mantener un estado global al que puedan acceder todos tus componentes
2. Implementa los datos de comidas y carrito de pedidos al backend de tu proyecto. Procura que la información se actualice en el backend, pudiendo publicar en este el listado de comidas y el carrito de pedidos que el usuario genere. Todo ello deberá reflejarse en el repositorio global Vuex.

### Se debe entregar:

- Tu proyecto funcional, el cual será corregido por tu tutor.

## Para ejecutar proyecto

```
npm install
```

```
npm run serve
```

Notas:

- dejo archivo /src/assets/json/items.json con info de items para probar crear, editar y eliminar items 😁
- cuando se da de alta un usuario, es buyer por defecto. Se puede hacer admin editando al usuario
- Ej user admin: caro@mail.com, caro1234
- Ej user buyer: lu@mail.com, lu1234

# Previamente...

### 🤓💻 Proyecto2 - Bottino

Segunda entrega de proyecto final del curso. (29 de junio 2023)
Debes continuar trabajando sobre la entrega intermedia 1, presentada anteriormente.

#### Objetivos Generales:

1. Sumar un backend a tu proyecto con login e interacción total sobre el endpoint.
2. Integrar Axios para trabajar contra los datos de tu endpoint.

#### Objetivos Específicos:

1. Definir formularios de login y registro de usuario con sus respectivas validaciones.
2. Integrar Axios para consumir los recursos desde tu backend en mockapi.
3. Crear un Login y Registro de usuarios utilizando los métodos GET y POST.
4. Crear un recurso en el backend para listar productos o servicios, incorporando los métodos (GET, POST, PUT, DELETE).
5. Crear un último recurso que será el carrito, integrando GET y POST para realizar y revisar pedidos.
6. Crear una Vista de login de usuario con componentes de login y registro, hardcodeando el acceso (para corregir más fácilmente).
7. Crear Router de Vista que seleccione los componentes a representar, una vez logueado, según el perfil de usuario.
   Tendrás que crear un usuario ADMIN (ABM de productos e Información general), y un usuario CLIENTE (listado de productos y carrito)

#### Se debe entregar:

- Tu proyecto funcional, el cual será corregido por tu tutor.

### 🤓💻 1er Proyecto Final - Bottino

Primer entrega de proyecto final del curso. (15 de junio 2023)

#### Objetivos Generales:

1. Crea el primer approach de lo que será tu proyecto final
2. Deberá estar formateado con el framework Bootstrap

#### Objetivos Específicos:

A. El proyecto deberá incluir: registro + login de usuario, listado, información y carrito.
B. Debes definir la lógica y la estructura de la presentación de los datos en el listado de productos, la información (detalle) de los mismos y el carrito de compras.

#### Se debe entregar:

- Creación de componentes (vista + lógica base + clases Bootstrap): registro, login, listado, info y carrito.
- El proyecto debe tener definida ya la lógica y estructura de representación de datos en listado, info y carrito; utilizando tablas dinámicas y tomando sus datos de archivos en formato JSON, o de propiedades creadas dentro de los componentes con información de prueba.
- Por el momento, evita utilizar plataformar online para suministrar los datos remotos, así es más fácil poder evaluar la correcta definición de los mismos.
