(function(jsonController) {

    var msgs = require('../msgs.js');

    jsonController.init = function(app) {

      app.get("/json", function(req, res) {
        console.log('responding to /json');
        res.set('Content-Type', 'application/json');
        res.send({controller: 'jsonController', data: msgs.json});
      });

      app.get("/json/colors", function(req, res) {
        console.log('responding to /json/colors');
        res.set('Content-Type', 'application/json');
        res.send({controller: 'jsonController', data: ['Red', 'Green', 'Blue']});
      });

      app.get("/json/lorem", function(req, res) {
        console.log('responding to /json/lorem');
        res.set('Content-Type', 'application/json');
        res.send({controller: 'jsonController',
                data:
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'});
      });

    };

})(module.exports);
