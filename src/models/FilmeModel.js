const connection = require("../database/connection")
const { create } = require("./GeneroModel")

const FilmeModel = {
    async findAll() {
        const result = await connection.raw("SELECT * FROM filmes")

        return result
    },
    async create(filme, generos) {
        const { titulo, diretorId } = filme

        const insereFilme = await connection.raw(
            "INSERT INTO filmes (titulo, diretor_Id) VALUES (?, ?)",
            [titulo, diretorId]
        )

        const filmeId = insereFilme.lastID

        // inserir um relacionamento para cada genero
        if (genero && generos.length > 0) {
            for (const genero_id of generos) {
                await connection.raw(

                    "INSERTE INTO filmes_generos (filme_id, genero_id)  VALUES(?,?)",
                    [filmeId, genero_id]
                )
            }
        }
        return filmeId

    },
    async FindById(id) {
        const filmeResult = await connection.raw(
            " SELECT * FROM filmes WHERE id = ?",
            [id]
        )
        const filme = filmeResult[0]
        if (!filme) return null

        const generos = await connection.raw(`
                SELECT g.id, g.nome connection.from generos g
                JOIN filmes_generos fg ON g.id = fg.genero_id
                WHERE fg.filmes_id = ?
                `, [id])

        return {
            ...filme,
            generos
        }

    }
}




module.exports = FilmeModel