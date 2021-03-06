const request = require("supertest");
const app = require("../../src/app");
const connection = require("../../src/database/connection");

describe("ONG", () => {
  beforeEach(async () => {
    //Desfaz as alterações do último teste
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => await connection.destroy());

  it("should be able to create a new ONG", async () => {
    const response = await request(app)
      .post("/ongs")
      .send({
        name: "APAD",
        email: "email@email.com",
        whatsapp: "2799999999",
        city: "Okazaki",
        uf: "JP"
      });

    // console.log(response.body);
    expect(response.body).toHaveProperty("id");
    expect(response.body.id).toHaveLength(8);
  });
});
