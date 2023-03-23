const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('ejamerica', 'root', '',{
    host:'localhost',
    dialect:'mysql'

})

try{
    sequelize.authenticate()
    console.log('Connection have been establised successfully.');
}catch(error){
    console.error('Unable to connect to database',error);
}

module.exports= sequelize;