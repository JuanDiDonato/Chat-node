const {Router} = require('express') 
const router = Router()
//importo solo index desde controladores
const {index} = require('../controladores/controles')

//defino una ruta tipo get
router.get('/', index)


//exporto router
module.exports=router