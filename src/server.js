//Modules
const express = require('express') 
const app = express()
const morgan = require('morgan')
const path = require('path')



//Settings
//Port
app.set('port', 5000)
app.set('views', path.join(__dirname, 'views')) //traigo las vistas al index.js (une los directorios)
app.use(express.static(path.join(__dirname, 'views')));

//para que cuando llame a un html, no tenga que poner la extension html
app.set('view engine', 'html')

//Middlewares ==> funciones que se ejecutan previamente a que se ejecute otra
//Morgan 
app.use(morgan('dev'))

//Routes
//Llamo al archivo routes
app.use(require('./routes/routes'))

//exporto el modulo
module.exports=app
