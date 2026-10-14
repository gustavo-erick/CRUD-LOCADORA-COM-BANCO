const express = require ("express")
const router = express.Router()

const DiretorController = require ("../controllers/DiretorController")

router.get("/", DiretorController.getAllDiretores)
router.post("/", DiretorController.createDiretor)

module.exports = router