const { Sequelize, DataTypes } = require('sequelize');


const sequelize = new Sequelize('ejamerica', 'root', '',{
    host:'localhost',
    logging:false,
    dialect:'mysql'

})

try{
    sequelize.authenticate()
    console.log('Connection have been establised successfully.');
}catch(error){
    console.error('Unable to connect to database',error);
}

const db = {}
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.post = require('./post')(sequelize,DataTypes)
db.sequelize.sync({})


module.exports= db;