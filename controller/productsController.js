const db = require("../config/database");

const productsController = {
  createTableProducts(req, res) {
    let sql =
      "CREATE TABLE products(id int AUTO_INCREMENT, category_id int ,product_name VARCHAR(45), product_price int, product_serial_number VARCHAR(45),  PRIMARY KEY (id), FOREIGN KEY(category_id) REFERENCES categories(id))";
    db.query(sql, (err, result) => {
      if (err) throw err;
      res.send("Table has been created");
    });
  },
  addProduct(req,res){
    let post = {category_id : req.body.id, product_name: req.body.name, product_price: req.body.price, product_serial_number: req.body.serial};
    let sql = 'INSERT INTO products SET ?'
    db.query(sql,post,(err,result)=>{
        if(err)throw err;
        res.send(`${post.product_name} has added`);
    })
},
update(req,res){
    let newName = req.body.name;
    let sql = `UPDATE products SET product_name='${newName}' WHERE id=${req.params.id}`;
    db.query(sql,(err,result)=>{
        if(err)throw err;
        res.send('Completed')
    })
},
show(req,res){
    let sql = 'SELECT * FROM products';
    db.query(sql,(err,result)=>{
        if(err)throw err;
        res.send(result);
    })
},
selectById(req,res){
    let sql = `SELECT * FROM products WHERE id=${req.params.id}`
    db.query(sql,(err,result)=>{
        if(err)throw err;
        res.send(result);
    })
},
orderDesc(req,res){
    let sql = 'SELECT * FROM products order by id DESC';
    db.query(sql,(err,result)=>{
        if(err)throw err;
        res.send(result);
    })
},
productName(req,res){
    let sql = `SELECT * FROM products WHERE product_name  ="${req.params.name}"`
    db.query(sql,(err,result)=>{
        if(err)throw err;
        res.send(result);
    })
},
delete(req,res){
    let sql = `DELETE FROM products2 WHERE id = ${req.params.id}`
    db.query(sql,(err,result)=>{
        if(err)throw err;
        res.send("Delete sucessfully")
    })
}
};


module.exports = productsController;
