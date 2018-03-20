let express = require("express");
let app = express();
let bodyParser = require("body-parser");

app.set("views", "views");
app.set("view engine", "html");

// parse application/x-www-form-urlencoded
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

// parse application/json
app.use(bodyParser.json());

// ROUTES
require("./routesTest/index").init(app);

// ALL OTHER ROUTES REDIRECT TO '/'
app.get("*", function(req, res) {
  res.send("Test API from Dianophe.fr");
});

module.exports = app;
