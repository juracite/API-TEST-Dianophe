let path = require("path");
let data = require("../responses/users.json");

/**
 * @param  {Object} app
 */
function initUsers(app) {
  app.get("/test/users", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    return res.send(JSON.stringify(data, null, 4));
  });
}

module.exports = initUsers;
