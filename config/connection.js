var Sequelize = require('sequelize');

var source = {
    localhost: {
        port: 3306,
        host: 'localhost',
        user: 'root',
        password: 'guy',
        database: 'burgers_db'
    },
    jawsDB: {
        port: 3306,
        host: 'z37udk8g6jiaqcbx.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: '	tco9ilk0892gkffv',
        password: 'r0woyae8nqqoevj1',
        // database: 'aemqtep6vfn04h7l'//not sure what this is?
    }
}

var selectedSource = source.jawsDB;


var sequelize = new Sequelize(selectedSource.database, selectedSource.user, selectedSource.password, {
    host: selectedSource.host,
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
});

module.exports = sequelize;
