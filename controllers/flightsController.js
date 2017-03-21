(function(flightsController) {

    var data = require('../data');

    flightsController.init = function(app) {

      app.get("/flights", function(req, res) {
        console.log('responding to /flights');

        data.flights(function(err, results) {
            var model = {title: "Display Flight Numbers", count: 120 };
            model.flights = results;
            res.render("flights", model);
        });

      });

    };

})(module.exports);
