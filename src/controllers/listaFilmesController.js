const filmes = require("../model/filmes.json")

exports.get = (req, res) => {
    console.log(req.url)
    res.status(200).send(filmes)
}

exports.getListaDeFilmes = (req, res) => {
    const listafilmes = filmes.map(item => item.Titulo)
    res.status(200).send(listafilmes)
}

