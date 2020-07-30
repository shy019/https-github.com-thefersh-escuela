 // Requires
 var express = require('express');
 var bodyParser = require('body-parser')

 // Inicializar Variables
 var app = express();

 // Escuchar Peticiones
 app.listen(3000, () => {
    console.log('Express Server en el puerto 3000: \x1b[32m%s\x1b[0m', 'Online');
})