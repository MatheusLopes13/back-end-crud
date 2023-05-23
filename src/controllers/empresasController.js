const { Empresa } = require('../models')

const empresasController = {

    home: async (req, res) => {
        const novoArray = await Empresa.findAll()
        res.send(novoArray)
    },

    buscarEmpresa: async (req, res) => {
        const { id } = req.params
        const novoArray = await Empresa.findOne({
            where: { id }
        })
        res.send(novoArray)
    },

    criarEmpresa: async (req, res) => {
        const empresa = req.body
        await Empresa.create(empresa)
        const novoArray = await Empresa.findAll()
        res.send(novoArray)
    },

    deletarEmpresa: async (req, res) => {
        const { id } = req.params
        await Empresa.destroy({ where: { id } })
        const novoArray = await Empresa.findAll()
        res.send(novoArray)
    },

    editarEmpresa: async (req, res) => {
        const empresa = req.body
        console.log(empresa)
        await Empresa.update(empresa, { where: { id: empresa.id } })
        const novoArray = await Empresa.findAll()
        res.send(novoArray)
    },
}

module.exports = empresasController