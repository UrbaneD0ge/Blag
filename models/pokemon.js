const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Pokemon extends Model {}

pokemon.init({
    
},
{
    sequelize,
    freezeTableName: true,
    
})

