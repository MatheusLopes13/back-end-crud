const { INTEGER } = require("sequelize")

module.exports = (sequelize, DataType) => {
    const Empresa = sequelize.define('Empresa', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        nome: DataType.STRING(45),
        rua: DataType.STRING(45),
        bairro: DataType.STRING(45),
        cidade: DataType.STRING(45),
        estado: DataType.STRING(45),
        numero: DataType.INTEGER,
    },{
        timestamps:false,
        tableName: 'empresa'
    })
    
    return Empresa
}