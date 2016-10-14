var path = require('path');
var model = require('../model/sequelize-burger.js');
var express = require('express');
var app = express();


module.exports = function(app) {

    app.post('/add', function(request, response) {

        if (request.body.burger_name) {
            model.create({ burger_name: request.body.burger_name })
                .then(function() {
                    response.redirect('/');
                });
        }
    });

    app.put('/devour', function(request, response) {
        model.update(

            {
                devoured: 1
            },

            {
                where: {
                    id: request.body.burgerId
                }
            }
        ).then(function() {
            response.redirect('/');
        })
    });
    //used sequelize .update
app.put('/another', function(req,res){
        model.update(
            //set value to be update
            {
                devoured : 0
            },
            // where clause/criteria
            {   where : {
                    id: req.body.burgerid
                    }
            }
                ).then(function(){
                    res.redirect('/');
                })
            });

      }
