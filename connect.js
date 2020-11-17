const { Sequelize } = require('sequelize');

const db = 'db_node_sequrlize'
const username = 'root'
const password = ""

const sequelize = new Sequelize(db, username, password, {
    host: 'localhost',
    port: '3306',
    dialect: 'mysql' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
  });

  module.exports = sequelize