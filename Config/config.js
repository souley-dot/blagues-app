////// la destructuration de sepuelize afin de récupérer l'objet Sequelize ///////
const { Sequelize } = require('sequelize');
// Connexion à SQLite 
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
});

module.exports = sequelize;
