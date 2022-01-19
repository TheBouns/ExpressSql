const db = require("../config/database");

const categoriesController = {
  create(req, res) {
    let sql =
      "CREATE TABLE categories (id int AUTO_INCREMENT, name_category VARCHAR(45), PRIMARY KEY(id))";
    db.query(sql, (err, result) => {
      if (err) throw err;
      res.send("Table Has been created");
    });
  },
  add(req, res) {
    let post = { name_category: req.body.name };
    let sql = "INSERT INTO categories SET ?";
    db.query(sql, post, (err, result) => {
      if (err) throw err;
      res.send(`${post.name_category} has added`);
    });
  },
  show(req, res) {
    let sql = "SELECT * FROM categories";
    db.query(sql, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  },
  update(req, res) {
    let newName = req.body.name;
    let sql = `UPDATE categories SET name_category='${newName}' WHERE id=${req.params.id}`;
    db.query(sql, (err, result) => {
      if (err) throw err;
      res.send("Completed");
    });
  },
  searchById(req, res) {
    let sql = `SELECT * FROM categories WHERE id=${req.params.id}`;
    db.query(sql, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  }
};

module.exports = categoriesController;
