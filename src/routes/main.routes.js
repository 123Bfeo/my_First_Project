const express = require("express");
const router = express.Router();
const controllers = require('../controllers/mainControllers');

//Permite visualizar la vista del home 
router.get("/", controllers.home)
//Permite visualizar la vista del login
router.get("/login", controllers.login);
//Permite  enviar informacion al servidor 
router.post("/login", controllers.processLogin);
//permiter ver la vista de registroMaquinas
router.get("/registroMaquina", controllers.registerMaquina);
//permiter enviar informacion registroMaquinas
router.post("/registroMaquina", controllers.processRegisterMaquina);

module.exports = router;
