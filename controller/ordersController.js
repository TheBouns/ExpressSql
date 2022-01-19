const db = require("../config/database");

const orderController = {
    createTable(req,res){
        let sql = 'CREATE TABLE orders(id int AUTO_INCREMENT, user_id int,order_numb VARCHAR(45), PRIMARY KEY (id), FOREIGN KEY (user_id)  REFERENCES users(id) ON DELETE CASCADE)'
        db.query(sql, (err,result)=>{
            if(err)throw err;
            res.send('Table has been created');
        })
    },
    show(req,res){
        let sql = 'SELECT * FROM orders';
        db.query(sql, (err,result)=>{
            if(err)throw err;
            res.send(result)
        })
    },
    add(req,res){
        let post= {user_id: req.body.user_id , order_numb : req.body.numb}
        let sql= 'INSERT INTO orders SET ?';
        db.query(sql,post,(err,result)=>{
            if(err)throw err;
            res.send(`${post.order_numb} has added`);
        })
    }
}

module.exports = orderController;