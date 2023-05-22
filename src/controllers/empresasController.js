const { Empresa } = require('../models')

const empresasController = {

    home: async (req, res) => {
       const empresas = await Empresa.findAll()
       res.send(empresas)
    },

    buscarEmpresa: async (req, res) => {
        const { id } = req.params
        const empresa = await Empresa.findOne({
            where: { id }})
        res.send(empresa)
     },

     criarEmpresa: async (req, res) => {
        const empresa = req.body
    
        await Empresa.create(empresa)
        const newEmpresa = await Empresa.findAll()
          res.send(newEmpresa)
        },
        
    deletarEmpresa: async (req, res) => {
        const { id } = req.params

        const empresa = await Empresa.destroy({ where: { id } })
        const newEmpresa = await Empresa.findAll()
        res.send(newEmpresa)
    }, 

    editarEmpresa: async (req, res) => {
        
        res.send()
    }



}

  
module.exports = empresasController