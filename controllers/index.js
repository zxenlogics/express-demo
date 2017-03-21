(function(controllers) {

    var homeController = require("./homeController");
    var jsonController = require("./jsonController");
    var flightsController = require("./flightsController");

    controllers.init = function(app) {
        homeController.init(app);
        jsonController.init(app);
        flightsController.init(app);
    };

})(module.exports);
