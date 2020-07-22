const Projet = require("../model/projet.model.js");

// Create and Save a new Projet
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
      }
    
      // Create a Projet
      const projet = new Projet({
        name: req.body.name,
        duration: req.body.duration,
        duration: req.body.github
      });
    
      // Save Projet in the database
      Projet.create(projet, (err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Project."
          });
        else res.send(data);
      });
};

// Retrieve all Projets from the database.
exports.findAll = (req, res) => {
    Projet.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving projects."
          });
        else res.send(data);
      });
};

// Find a single Projet with a ProjetId
exports.findOne = (req, res) => {
    Projet.findById(req.params.projetId, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Project with id ${req.params.projetId}.`
            });
          } else {
            res.status(500).send({
              message: "Error retrieving Project with id " + req.params.projetId
            });
          }
        } else res.send(data);
      });
};

// Update a Projet identified by the ProjetId in the request
exports.update = (req, res) => {
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
      }
    
      Projet.updateById(
        req.params.projetId,
        new Projet(req.body),
        (err, data) => {
          if (err) {
            if (err.kind === "not_found") {
              res.status(404).send({
                message: `Not found Project with id ${req.params.projetId}.`
              });
            } else {
              res.status(500).send({
                message: "Error updating Project with id " + req.params.projetId
              });
            }
          } else res.send(data);
        }
      );
};

// Delete a Projet with the specified ProjetId in the request
exports.delete = (req, res) => {
    Projet.remove(req.params.projetId, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Projet with id ${req.params.projetId}.`
            });
          } else {
            res.status(500).send({
              message: "Could not delete Project with id " + req.params.projetId
            });
          }
        } else res.send({ message: `Project was deleted successfully!` });
      });
};

// Delete all Projets from the database.
exports.deleteAll = (req, res) => {
    Projet.removeAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all projects."
          });
        else res.send({ message: `All Projects were deleted successfully!` });
      });
};
