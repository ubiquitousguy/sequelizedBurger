var path = require('path');
var model = require('../model/sequelize-burger.js');

module.exports = function(app) {

  app.get('/', function(req,res) {

    model.findAll({})
      .then(function(allBurgersData){
          response.render('index', {allBurgersData});
      })
  });
}
