const connection = require("../database/connection")

const DiretoroModel = {
    async findAll () {
        const result = await connection.raw("SELECT * FROM diretores")

        return result 
    },

    async create(data) {
        const {nome} = data
        const result = await connection.raw(
            "INSERT INTO diretores (nome) VALUES (?)",
            [ nome ]
        )

        return result
    }
}

module.exports = DiretoroModel