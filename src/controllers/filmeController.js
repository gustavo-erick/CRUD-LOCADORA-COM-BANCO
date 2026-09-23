const FilmeModel = require("../models/FilmeModel")
const filmeModel = require("../models/FilmeModel")

const FilmeController = {
    async getAllFilmes(req, res) {
        const filmed = await FilmeModel.getAllFilmes()
        return res.json(filmes)

    },

    async createFilme(req, res) {
        const{ 
            titulo,
            diretorId,
            generos 
        } = req.body

        const filme = {
            titulo,
            diretorId
        }

      const filmeId = await  FilmeModel.create (filme, generos)
    
        return res.status(201).json ({ id: filmeId })

    }
}

module.exports = FilmeController