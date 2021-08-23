
const express = require('express')
const router = express.Router()


router.get('/', (request, response) => {
  response.status(200).send({
    "titulo": "to-do-server",
    "version": "1.0.0",
    "mensagem": "Bem vinda a sua API de tarefas <3"
  })
});


module.exports = router;