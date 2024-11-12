# Proyecto Frontend - Registro y Login

Este proyecto es una **aplicación frontend** construida con **React.js** que permite a los usuarios registrarse y iniciar sesión. La aplicación incluye validaciones de formulario, pero solo cubre la parte del frontend. Para que funcione completamente, es necesario configurar un backend que maneje la autenticación de los usuarios.

## Requisitos previos

Antes de ejecutar este proyecto, asegúrate de tener los siguientes programas instalados en tu máquina:

- **Node.js** (Versión recomendada: 14.x o superior)
- **npm** (Node Package Manager, que se instala automáticamente con Node.js)

## Instalación

Sigue estos pasos para instalar y ejecutar el proyecto en tu máquina local:

1. **Clona este repositorio** en tu máquina local:

    ```bash
    git clone https://github.com/tu-usuario/frontend-validacion-registro.git
    ```

2. **Entra en la carpeta del proyecto**:

    ```bash
    cd frontend-validacion-registro
    ```

3. **Instala las dependencias necesarias**:

    ```bash
    npm install
    ```

## Ejecución

1. **Inicia la aplicación**:

    ```bash
    npm start
    ```

   Esto abrirá la aplicación en tu navegador en la dirección `http://localhost:3000`.

## Estructura del Proyecto

El proyecto tiene la siguiente estructura de carpetas:


Mis disculpas por la confusión anterior. Aquí tienes el README.md completo, que incluye todo lo que necesitas:

markdown
Copiar código
# Proyecto Frontend - Registro y Login

Este proyecto es una **aplicación frontend** construida con **React.js** que permite a los usuarios registrarse y iniciar sesión. La aplicación incluye validaciones de formulario, pero solo cubre la parte del frontend. Para que funcione completamente, es necesario configurar un backend que maneje la autenticación de los usuarios.

## Requisitos previos

Antes de ejecutar este proyecto, asegúrate de tener los siguientes programas instalados en tu máquina:

- **Node.js** (Versión recomendada: 14.x o superior)
- **npm** (Node Package Manager, que se instala automáticamente con Node.js)

## Instalación

Sigue estos pasos para instalar y ejecutar el proyecto en tu máquina local:

1. **Clona este repositorio** en tu máquina local:

    ```bash
    git clone https://github.com/tu-usuario/frontend-validacion-registro.git
    ```

2. **Entra en la carpeta del proyecto**:

    ```bash
    cd frontend-validacion-registro
    ```

3. **Instala las dependencias necesarias**:

    ```bash
    npm install
    ```

## Ejecución

1. **Inicia la aplicación**:

    ```bash
    npm start
    ```

   Esto abrirá la aplicación en tu navegador en la dirección `http://localhost:3000`.

## Estructura del Proyecto

El proyecto tiene la siguiente estructura de carpetas:

frontend-validacion-registro/ ├── src/ │ ├── components/ # Contiene los componentes de React (Login, Register, etc.) │ ├── App.js # Componente principal de la aplicación │ ├── App.css # Estilos generales de la aplicación ├── public/ │ └── index.html # Archivo HTML principal └── package.json # Configuración de dependencias


## Funcionalidades

1. **Formulario de Registro**: Permite a los usuarios registrarse con nombre, correo y contraseña.
2. **Formulario de Login**: Los usuarios pueden iniciar sesión utilizando el nombre de usuario y la contraseña.
3. **Navegación**: Hay un enlace entre el formulario de login y el de registro, permitiendo que los usuarios se registren si no tienen cuenta.

## Credenciales para el Login

Para las pruebas de inicio de sesión, las credenciales son las siguientes:

- **Usuario**: root
- **Contraseña**: 1022933969

Estas credenciales están configuradas como ejemplo para el login.

## Dependencias

Este proyecto utiliza las siguientes dependencias:

- **React**: Librería de JavaScript para construir interfaces de usuario.
- **React Router DOM**: Librería para manejar la navegación en aplicaciones de una sola página (SPA).

Para instalar estas dependencias, ejecuta:

```bash
npm install react-router-dom
