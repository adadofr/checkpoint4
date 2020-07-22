const sql = require("../db.js");

const Projet = function(projet) {
  this.name = projet.name;
  this.duration = projet.duration;
  this.github = projet.github;
};

Projet.create = (newprojet, result) => {
  sql.query("INSERT INTO projet SET ?", newprojet, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created projet: ", { id: res.insertId, ...newprojet });
    result(null, { id: res.insertId, ...newprojet });
  });
};

Projet.findById = (projetId, result) => {
  sql.query(`SELECT * FROM projet WHERE id = ${projetId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found projet: ", res[0]);
      result(null, res[0]);
      return;
    }

    result({ kind: "not_found" }, null);
  });
};

Projet.getAll = result => {
  sql.query("SELECT * FROM projet", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("projets: ", res);
    result(null, res);
  });
};

Projet.updateById = (id, projet, result) => {
  sql.query(
    "UPDATE projet SET name = ?, duration = ?, github = ? WHERE id = ?",
    [projet.name, projet.duration, projet.github, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated projet: ", { id: id, ...projet });
      result(null, { id: id, ...projet });
    }
  );
};

Projet.remove = (id, result) => {
  sql.query("DELETE FROM projet WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted projet with id: ", id);
    result(null, res);
  });
};

Projet.removeAll = result => {
  sql.query("DELETE FROM projet", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} projets`);
    result(null, res);
  });
};

module.exports = Projet;
