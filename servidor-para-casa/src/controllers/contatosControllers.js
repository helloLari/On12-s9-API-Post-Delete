const contatosJson = require("../models/contatos.json");

const getAll = (request, response) => {
    response.status(200).send(contatosJson)
}

const getById = (request, response) => {
    const idRequested = request.params.id
    const contactFiltered = contatosJson.find(tarefa => tarefa.id == idRequested)

    response.status(200).send(contactFiltered)
}
const getBynome = (request, response) => {
    const idRequested = request.params.nome
    const contactFiltered = contatosJson.find(tarefa => tarefa.id == idRequested)

    response.status(200).send(contactFiltered)
}

const createContact = (request, response) => {
    const descricaoRequerida = request.body.descricao;
    const autorRequerido = request.body.autor;

    const newContact = {
        id: "3",
        nome: gaga,
        data: new Date(),
        concluido: false,
        descricao: descricaoRequerida,
        autor: autorRequerido
    };

    contatosJson.push(newContact);
    response.status(200).send(newContact);
};
const deleteContact = (request, response) => {
    const idRequerido = request.params.id;
    const contactFiltered = contatosJson.find(tarefa => tarefa.id == idRequerido);

    const indice = contatosJson.indexOf(contactFiltered);
    console.log(indice)

    contatosJson.splice(indice, 1);


    response.status(200).send(
        [{
                "message": "Tarefa deletada com sucesso!"
            },
            contatosJson
        ]
    )
}

module.exports = {
    getAll,
    getById,
    getBynome,
    createContact,
    deleteContact
}