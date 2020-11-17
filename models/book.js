const {DataTypes} = require('sequelize')
const sequire = require('../connect')
const Book = sequire.define('book', {
    barcode: DataTypes.STRING(11),
    name: DataTypes.STRING(255),
},{
    tableName: 'books',
    timestamps: true
})

Book.sync({alter: true})

module.exports = Book