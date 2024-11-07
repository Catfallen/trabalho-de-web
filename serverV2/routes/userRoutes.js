const express = require("express")

const router = express.Router();
const UserController = require("../controllers/userController.js");



router.get("/users/:id",UserController.getUserById);
router.get("/users/cell/:cell",UserController.getUserbyCell);
router.get("/horarios",UserController.getHorarios);
router.get("/servicos", UserController.getServices);
//get agendamento by cell

router.post("/users",UserController.createUser);
router.post("/gerarHorarios",UserController.gerarHorarios)
//post agendamento

router.put("/horarios",UserController.updateHorario);
router.put("/users/cell",UserController.updateUser);

//deletar agendamento by cell



module.exports = router;