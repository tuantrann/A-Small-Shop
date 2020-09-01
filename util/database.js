const Sequelize = require('sequelize').Sequelize;

const sequelize = new Sequelize('node_complete', 'root', '#Dang101061', 
{dialect: 'mysql', host: 'localhost'});

module.exports = sequelize;