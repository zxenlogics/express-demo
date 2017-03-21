(function(data) {

    var seedData = require('./seedData.js');

    data.flights = next =>
    {
       next(null, seedData.flights);
    };

})(module.exports);
