# NodeJS Microservicios
Arquitectura de microservicios NodeJS con proyecto en tiempo real

Se ha dividido una aplicación monolítica en Arquitectura de Microservicios. El objetivo principal de este repositorio es proporcionar una visión general de cómo la arquitectura de microservicios está trabajando con nodejs y cuál es la complejidad que tenemos que resolver para lograr el resultado de una arquitectura de Microservicios. 

====================================================================================================
A continuación, se describe los componentes clave y cómo se relacionan entre sí para formar la arquitectura de microservicios:

![Diagrama de microservicios](https://github.com/Yuberley/Node.js-Microservices/blob/master/docs/mermaid-diagram.png)

    Servicio de Clientes (customer):
        Dockerfile: Ver archivo
        package.json: Ver archivo
        Este servicio probablemente gestiona la lógica relacionada con los clientes, como la autenticación, el registro y la gestión de perfiles.

    Servicio de Productos (products):
        Dockerfile: Ver archivo
        package.json: Ver archivo
        Este servicio podría encargarse de todo lo relacionado con los productos, incluyendo su gestión, almacenamiento y consulta.

    Servicio de Compras (shopping):
        Dockerfile: Ver archivo
        package.json: Ver archivo
        Este servicio puede ser responsable de la lógica de la cesta de la compra, procesamiento de pedidos y pagos.

    Gateway (Puerta de enlace):
        Dockerfile: Ver archivo
        package.json: Ver archivo
        Actúa como un punto de entrada para los servicios, posiblemente manejando el enrutamiento, la autenticación de las solicitudes y la agregación de respuestas.