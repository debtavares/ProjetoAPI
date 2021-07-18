const contatinhos = require('../models/contatos.json')

const getAll = (req,res) => {
    res.status(200).send(contatinhos)
}

const getById = (req,res) => {
    const idReq = req.params.id

    const contatinhofiltered = contatinhos.find(contatos => contatos.id == idReq)

    res.status(200).send(contatinhofiltered)
}

const register = (req,res) => {
    const name = req.body.nome
    const number = req.body.celular
    const redeSocial = req.body.redesSociais

    const nregister = {
        id: "12345",
        nome: name,
        celular: number,
        redesSociais: redeSocial
    }

        contatinhos.push(nregister)

        res.status(200).send(nregister)

}

const deletec = (req,res) => {

    const idReq = req.params.id
    const contatinhoFiltered = contatinhos.find(contatos => contatos.id == idReq)

    const indice = contatinhos.indexOf(contatinhoFiltered)

    contatinhos.splice(indice,1)

    res.status(200).send([{"message":"contatinho deletado com sucesso", contatinhos}])
}

module.exports = {
    getAll,
    getById,
    register,
    deletec
}