//arreglo vacio
const ctrl = {};

//funciones para la rutas
//index
ctrl.index = (require,response) => {
    //retorno un html
    response.render('chat')
}

module.exports=ctrl