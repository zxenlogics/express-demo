var http = require("http");
var express = require("express");
var app = express();
var msgs = require("./msgs.js");

// reference everything inside the controllers folder
var controllers = require("./controllers");

app.set("view engine", "vash");
app.use(express.static(__dirname + '/public'));

// Map the routes
controllers.init(app);

/*app.get("/", function(req, res) {
  console.log('responding to /');
  res.send("<html><body> <h1>" + msgs.texts('h') +  "</h1> <p>" + msgs.names('hal') + "</p></body></html>");
});

app.get("/json", function(req, res) {
  console.log('responding to /json');
  res.set('Content-Type', 'application/json');
  res.send(msgs.json);
});
*/

app.get("/vash", function(req, res) {
  console.log('responding to /vash');
  res.render('index', {title: 'Hello Vash'});
});

var server = http.createServer(app);
server.listen(3000);

// Listen via Express
//app.listen(3000);
console.log('Listening on port 3000 via Express. Access via http://localhost:3000');
