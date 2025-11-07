///// Importation de Sequelize /////
const {DataTypes}=require('sequelize')
/////////Importation du fichier de la configuration /////
const sequelize =require('../Config/config')

const blagues= sequelize.define('blagues',{
    question:{
        type:DataTypes.TEXT,
        allowNull: false,
    },
    response:{
        type:DataTypes.TEXT,
        allowNull: false,
    }
})

module.exports=blagues;