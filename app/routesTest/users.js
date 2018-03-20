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
  app.get("/test/user/:id", (req, res) => {
    res.setHeader("Content-Type", "application/json");

    let reg = /^\d+$/;
    let id = req.params.id;

    if (reg.test(id)) {
      data.forEach(user => {
        if (user.id == id) {
          return res.send(
            JSON.stringify(
              {
                id: id,
                username: user.username,
                nbr_tickets: user.nbr_tickets,
                account_type: user.account_type,
                img_url: user.img_url
              },
              null,
              4
            )
          );
        }
      });
    } else {
      return res.send(
        JSON.stringify(
          {
            error: "Nombre/Chiffres uniquement !"
          },
          null,
          4
        )
      );
    }

    return res.send(
      JSON.stringify(
        {
          error: "Utilisateur introuvable."
        },
        null,
        4
      )
    );
  });
}

module.exports = initUsers;
