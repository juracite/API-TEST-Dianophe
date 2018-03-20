let app = require("./app");
let port = process.env.PORT || 1337;

app.listen(port);
console.log("Ecoute sur le port : " + port);
