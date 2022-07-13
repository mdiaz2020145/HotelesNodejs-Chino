require('dotenv').config();

UsuarioController = require('./src/controllers/usuario.controller');
import { Promise, connect } from 'mongoose';
import { listen } from './app';

console.log(process.env);

//const PORT = process.env.PORT || 3000;

Promise = global.Promise;                                                                
connect(process.env.CONTROL_HOTELES, { useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
    console.log("Se encuentra conectado a la base de datos.");

    listen(process.env.PORT|| 3000, function () {
        console.log('Corriendo en el puerto 3000')
    })
    
    UsuarioController.RegistrarAdmin();

}).catch(error => console.log(error));