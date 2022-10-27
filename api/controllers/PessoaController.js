const database = require("../models")

class PessoaController {

    static async pegaTodasPessoas(req, res) {
        try {
            const todasPessoas = await database.Pessoas.findAll();
            return res.status(200).json(todasPessoas)
        } catch (error) {
            return res.status(200).json(error.message)
        }
    }

    static async pegaUmaPessoa(req, res) {

        const { id } = req.params;

        try {
            const pessoa = await database.Pessoas.findOne({ where: { id: Number(id) } })
            return res.status(200).json(pessoa)

        } catch (error) {
            return res.status(200).json(error.message)
        }

    }

    static async criarPessoa(req, res) {

        const pessoa = req.body;

        try {
            const novaPessoaCriada = await database.Pessoas.create(pessoa);
            return res.status(200).json(novaPessoaCriada);

        } catch (error) {
            return res.status(200).json(error.message)
        }
    }

    static async atualizaPessoa(req, res) {

        const { id } = req.params;
        const novaInfos = req.body;

        try {
            await database.Pessoas.update(novaInfos, { where: { id: id } })
            return res.status(200).send("Pessoa Atualizada")
        } catch (error) {
            return res.status(200).json(error.message)
        }
    }

    static async apagaPessoa(req, res) {

        const { id } = req.params;
        await database.Pessoas.destroy({ where: { id: id } });
        return res.status(200).json({ message: `ID ${id} Deletado` })
        try {

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmaMatricula(req, res) {

        const { estudanteID, matriculaID } = req.params

        try {
            const umaMatricula = await database.Matriculas.findOne(
                {
                    where: {
                        id: Number(matriculaID),
                        estudante_id: Number(estudanteID)
                    }
                })
            return res.status(200).json(umaMatricula)

        } catch (error) {
            return res.status(200).json(error.message)
        }

    }

    static async criarMatricula(req, res) {

        const { estudanteID } = req.params;
        const novaMatricula = { ...req.body, estudante_id: Number(estudanteID) };

        try {
            const novaMatriculaCriada = await database.Matriculas.create(novaMatricula);
            return res.status(200).json(novaMatriculaCriada);

        } catch (error) {
            return res.status(200).json(error.message)
        }
    }

    static async atualizaMatricula(req, res) {

        const { estudanteID, matriculaID } = req.params;

        const novaInfos = req.body;

        try {
            await database.Matriculas.update(novaInfos, {
                where: {
                    id: Number(matriculaID),
                    estudante_id: Number(estudanteID)
                }
            })
            const matriculaAtualizada = await database.Matriculas.findOne({
                where: {
                    id: Number(matriculaID)
                }
            })
            return res.status(200).json(matriculaAtualizada)
        } catch (error) {
            return res.status(200).json(error.message)
        }
    }

    static async apagaMatricula(req, res) {

        const { matriculaID } = req.params;

        await database.Matriculas.destroy({
            where: {
                id: Number(matriculaID)
            }
        });
        return res.status(200).json({ message: `ID ${matriculaID} Deletado` })
        try {

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}


module.exports = PessoaController;
