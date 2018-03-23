let app = require("./app");
let port = process.env.PORT || 1337;

let server = app.listen(port);
console.log("Ecoute sur le port : " + port);

module.exports = server;
