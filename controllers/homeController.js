(function(homeController) {

    homeController.init = function(app) {

      app.get("/", function(req, res) {
        //res.send("<html><body> <h1>Hello Express Demo</h1></body></html>")
        console.log('responding to /');
        res.render("index", { title: "Express + Vash + conroller" });
      });

    };

})(module.exports);
