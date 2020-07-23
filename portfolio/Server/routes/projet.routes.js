module.exports = app => {
    const projets = require("../controller/projet.controller.js");
    app.post("/projets", projets.create);
    app.get("/projets", projets.findAll);
    app.get("/projets/:projetId", projets.findOne);
    app.put("/projets/:projetId", projets.update);
    app.delete("/projets/:projetId", projets.delete);
    app.delete("/projets", projets.deleteAll);
  };
  