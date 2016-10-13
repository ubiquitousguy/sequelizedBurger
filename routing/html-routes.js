var path = require('path');
var model = require('../model/sequelize-burger.js');
console.log("html-routes connected");

module.exports = function(app) {

  app.get('/', function(req,res) {

    model.findAll({})
      .then(function(burgers){
          res.render('index', {burgers});
      })
  });
  app.get('/del', function(req,res){
		Model.destroy({truncate: true}).then(function(burgers){

	    		res.redirect('/');
	    	})
	});



}
