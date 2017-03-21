/*
exports.hello = 'Hello demo app in Node.s';
exports.world = 'Welcome to the world of Node.s';
*/
module.exports.texts = function(name) {

  var msgs = {
    h: 'Hello from Dictionary',
    w: 'World of Exports!'
  };

  return msgs[name];
};

module.exports.names = function(key) {

  var msgs = {
    den: 'Denzl Brown',
    hal: 'Halle Berry!'
  };

  return msgs[key];
};

module.exports.json = {name: 'Denzil Brown', role: 'Node Developer'};
