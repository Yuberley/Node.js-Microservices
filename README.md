# NodeJS Microservicios
Arquitectura de microservicios NodeJS con proyecto en tiempo real

Se ha dividido una aplicación monolítica en Arquitectura de Microservicios. El objetivo principal de este repositorio es proporcionar una visión general de cómo la arquitectura de microservicios está trabajando con nodejs y cuál es la complejidad que tenemos que resolver para lograr el resultado de una arquitectura de Microservicios. 

====================================================================================================
A continuación, se describe los componentes clave y cómo se relacionan entre sí para formar la arquitectura de microservicios:

![Diagrama de microservicios](https://github.com/Yuberley/Node.js-Microservices/blob/master/docs/mermaid-diagram.png)

**Cliente (Web/Móvil):**
- Representa a los usuarios finales que interactúan con el sistema a través de una aplicación web o móvil. Este cliente realiza solicitudes al Gateway.

**Gateway (Puerta de enlace):**
- Actúa como un punto de entrada para los servicios, posiblemente manejando el enrutamiento, la autenticación de las solicitudes y la agregación de respuestas.

**Servicio de Clientes (customer):**
- Este servicio probablemente gestiona la lógica relacionada con los clientes, como la autenticación, el registro y la gestión de perfiles.

**Servicio de Productos (products):**
- Este servicio podría encargarse de todo lo relacionado con los productos, incluyendo su gestión, almacenamiento y consulta.

**Servicio de Compras (shopping):**
- Este servicio puede ser responsable de la lógica de la cesta de la compra, procesamiento de pedidos y pagos.
- 
![Diagrama de microservicios](https://i.ibb.co/zFqNqmG/Screenshot-2023-12-04-134041.png)
