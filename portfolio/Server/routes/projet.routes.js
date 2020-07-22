module.exports = app => {
    const projets = require("../controller/projet.controller.js");
    app.post("/projets", projets.create);
    app.get("/projets", projets.findAll);
    app.get("/projets/:customerId", projets.findOne);
    app.put("/projets/:customerId", projets.update);
    app.delete("/projets/:customerId", projets.delete);
    app.delete("/projets", projets.deleteAll);
  };
  