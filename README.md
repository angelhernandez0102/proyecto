# TecniSolutions Project
Proyecto para la materia AWOS
<h1 align="center">Tecni Solutions</h1>

## Contenido
- [1. Introducción](#1.Introducción)
- [2. Propósito](#2.Proposito)
- [3. Alcance de TecniSolutions](#3.Alcance)
- [4. Entorno operativo](#4.Entorno_Operativo)
- [5. Objetivos del proyecto](#5.Objetivos_del_proyecto)
- [6. Funcionalidades](#7.Funcionalidades)
- [7. Reglas de negociacio](#Reglas)
- [8. Requerimientos funcionales](#Requerimientos_funcionales)
- [9. Requerimientos no funcionales](#Requerimientos_no_funcionales)
- [10. Referencias](#12.Referencias)

- ## 1. Introduccion
- - En un mundo cada vez más conectado, la importancia de mantener nuestros electrodomésticos en el mejor estado posible se vuelve fundamental. Por ello, hemos decidido creat [TecniSolutions], una plataforma digital diseñada para conectar a expertos en reparación de electrodomésticos con las personas que buscan soluciones confiables y eficientes. Este documento nos muestra cómo nuestra aplicación web ofrece a los profesionales en reparación la oportunidad de expandir sus negocios en línea, y así llegar a nuevos clientes y prosperar en un mercado cada vez más competitivo. 

- ## 2. Propósito
- - Nuestro propósito principal es ayudar a pequeños y grandes negocios enfocados en la reparacion de electrodomesticos, mostrando en nuestra pagina web la información necesaria cada negocio, para que el usuario pueda obtener las mejores opciones. Realmente esperamos que [TecniSolutions] se convierta en el punto de encuentro perfecto entre la demanda de servicios de reparación y los expertos en hacerlo para satisfacer esas necesidades.

- ## 3. Alcance de TecniSolutions
- - Propósito: Facilitar la conexión entre los técnicos en reparación que desean dar a conocer sus servicios y clientes, creando un espacio digital que promueva el crecimiento de sus negocios.
    
- - Objetivo General: Crear una aplicación web que sirva como punto de encuentro para la oferta y demanda de servicios de reparación de electrodomésticos.
    
- - Beneficios para el Área de Negocio y Organización:
    Para los Expertos:
  - Mayor presencia y alcance de mercado en línea.
  - Incremento de clientes en sus negocios.
    Para la Aplicación:
  - Crecimiento mediante la expansión de la base de usuarios.
  - Establecimiento confiable en el sector de reparación.
    
- - Objetivos y Metas:
    Objetivos del Software:
  - Desarrollar una interfaz intuitiva y fácil de usar para técnicos y usuarios.
  - Implementar un sistema de reserva y pago eficiente.
  - Garantizar la seguridad de la información y transacciones.
    Relación con Objetivos Corporativos:
  - Contribuir al crecimiento financiero de la organización mediante la generación de ingresos.
  - Posicionarse como líder en el mercado de servicios de reparación de electrodomésticos.
  - Mejorar la reputación y confianza de la marca a través de la satisfacción del cliente.

- ## 4. Entorno Operativo
  - Desarrollo Frontend: Utilización de tecnologías web modernas como el Motor de Plantillas Tailwind, CSS y Pug para una interfaz de usuario atractiva y funcional.
  - Desarrollo Backend: Implementación de un backend con lenguajes como JavaScript, Node.js, y el uso del framework Express.
  - Base de Datos: Integración con una base de datos eficiente para almacenar la información de los usuarios, así como información reelevante de los negocios, las categorias, mensajes, los precios de cada servicio. Para ello decidimos utilizar MySQL.
  - Seguridad: Implementación de medidas de seguridad como el cifrado de contraseñas con .
- - Hospedaje: 
  - Hospedaje en la Nube: Utilización del servicio Hostinger, un proveedor de hosting web que ofrece planes de alta calidad y rendimiento para webs personales y empresariales.
- - Integración de API'S:
  - Servicios de Mapas: Incorporación de un mapa como herramienta de ubicación para los negocios con Leaflet, una librería JavaScript para crear mapas interactivos en un entorno móvil.

- ## 5. Objetivos del proyecto
  - El principal objetivo de [TecniSolutions] es desarrollar un sistema digital para los expertos en la reparación de electrodomésticos, que sea efectiva para promocionar y expandir sus negocios.
    Sin embargo, también esperamos:
  - Permitir que los técnicos de reparación alcancen a una audiencia más amplia al ofrecer una presencia en línea, donde puedan acceder de manera más sencilla.
  - Facilitar la conexión entre expertos y clientes, asegurando que los servicios de reparación  que requiera casa usuario, se adapten a sus necesidades.
  - Brindar oportunidades para que los negocios de reparación crezcan al atraer nuevos clientes, y así, expandir su presencia en el mercado en línea.
    
- ## 6. Funcionalidades
  - Permite a los técnicos crear perfiles detallados con información relevante sobre su negocio.
  - Permite que puedan registrarse, creando perfiles para que los usuarios uedan acceder de manera más rápida.
  - Ofrece una interfaz intuitiva que permite a los usuarios buscar profesionales según ubicación, e información proporcionada por los técnicos en reparación.
  - Facilita la comunicación directa entre usuarios y profesionales para encontrar lo que necesiten en cuanto a reparaciones.
  - Incorpora mapas interactivos para mostrar la ubicación de los profesionales y facilitar la planificación de servicios.

- ## 7. Reglas de negocio
  - El usuario podrá loguearse si ya se ha registrado, es decir, tiene una cuenta validada
  - El correo debe seguir el siguiente formato: example123@gmail.com para verificar al usuario.
  - La contraseña debe ser mayor 6 carácteres para verificar al usuario.
  - Si el usuario tiene una cuenta validada y olvida su contraseña, puede recuperarla mediante el correo electrónico.
  - El usuario podrá publicar su negocio si esta registrado previamente
  - Para poder guardar su publicación deberá llenar completamente el formulario indicado.

- ## 8. Requerimientos funcionales
  - Registro de usuarios con el rol de técnico.
  - Inicio de sesión pidiendo datos del usuario.
  - Catálogo de electrodomésticos disponibles para mantenimiento.
  - Notificaciones por correo electrónico para validar el logueo.
  - Sistema de gestión de usuarios y permisos.
  - Compatibilidad con dispositivos móviles y tablets.
  - Almacenamiento de información en la base de datos.
  - Capacidad de recuperar contraseñas olvidadas.
  - Integración con mapas para la ubicación del servicio.
  - Compatibilidad con múltiples navegadores web.
  - Soporte para carga de fotos del negocio.
  - Seguridad de los datos: Cifrado de contraseña.
  - Pruebas de carga para garantizar el rendimiento.
  - Base de datos desarrollada en MySQL.
  - Contar con un servicio de Host para el alojamiento de la base de datos y de la aplicación.

- ## 9. Requerimientos no funcionales
  - Tiempo de carga de la página: Menos de 3 segundos.
  - Diseño responsivo para diferentes tamaños de pantalla.
  - Interfaz de usuario intuitiva y fácil de usar.
  - Paleta de colores claros para fácil entendimiento.
  - Tamaño de fuente cómodo para lectura
  - Secciones claras para fácil entendimiento y manejo de la página.
 
- ## 10. Referencias:
- - https://www.hostinger.mx/
- - https://tailwindcss.com/docs/customizing-colors
- - https://github.com/
- - https://www.udemy.com/course/nodejs-bootcamp-desarrollo-web-mvc-y-rest-apis/learn/lecture/32702990#overview
- - https://www.ibm.com/docs/es/bpm/8.5.6?topic=types-business-rules
- - https://mailtrap.io/inboxes/2518810/messages/3904134656
