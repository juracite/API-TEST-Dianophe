let request = require("supertest");
let users = require("../app/responses/users.json");

describe("loading express", () => {
  let server;
  beforeEach(() => {
    server = require("../server");
  });
  afterEach(() => {
    server.close();
  });

  it("Réponse de la route '/'", done => {
    request(server)
      .get("/")
      .expect(200, done);
  });

  it("Réponse de la route '/test/user/:id'", done => {
    request(server)
      .get("/test/user/1")
      .expect(200, done);
  });

  it("Réponse de la route '/test/users'", done => {
    request(server)
      .get("/test/users")
      .expect(JSON.stringify(users, null, 4), done);
  });
});
