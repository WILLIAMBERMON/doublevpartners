Para ejecutar el docker solo es necesario ejecutar el siguiente comando:
docker-compose up --build

El phpMyAdmin cargará en la url: 
http://localhost:8000/
Para ingresar utilizar usuario: root y clave: prueba
Por defecto se crear la tabla ticket con las siguientes columnas:
id->int autoincremental
usuario->varchar(1000)
fecha_creacion->datetime (default current_timestamp)
fecha_actualizacion->datetime(puede ser nulo)
status->varchar(100 y default abierto)

El proyecto cargará en la url:
http://localhost:10000/

Adjunto export de postman para probar las api, el nombre del documento es:
api rest.postman_collection.json

De igual manera, para crear un ticket se debe ingresar a la url:
http://localhost:10000/Ticket/crear
y enviar como mínimo el usuario como parametro.

Para listar los tickets se debe ingresar a la url:
http://localhost:10000/Ticket/listar
en este caso puede enviar los parametros (id,pagina,limite) de ser necesario, de lo contrario listará todos.

Para actualizar un ticket se debe ingresar a la url:
http://localhost:10000/Ticket/actualizar
y enviar como mínimo el id y un dato a actualizar(usuario,status)

Para eliminar un ticket se debe ingresar a la url:
http://localhost:10000/Ticket/eliminar
y enviar obligatoriamente el id a eliminar