const { use } = require("express/lib/router");
const db = require("../config/database");

const userController = {
    create(req,res){
        let sql= 'CREATE TABLE users(id int AUTO_INCREMENT, user_name VARCHAR(45), user_email VARCHAR(45), PRIMARY KEY (id))'
        db.query(sql, (err,result)=>{
            if(err)throw err;
            res.send('Table has been created');
        })
    },
    add(req,res){
        let post= {user_name: req.body.name , user_email : req.body.mail}
        let sql= 'INSERT INTO users SET ?';
        db.query(sql,post,(err,result)=>{
            if(err)throw err;
            res.send(`${post.user_name} has added`);
        })
    },
    show(req,res){
        let sql = 'SELECT * FROM users';
        db.query(sql,(err,result)=>{
            if(err)throw err;
            res.send(result)
        })
    },
    search(req,res){
        let sql = `SELECT * FROM users WHERE id=${req.params.id}`
        db.query(sql,(err,result)=>{
            if(err)throw err;
            res.send(result);
        })
    },
    delete(req,res){
        let sql = `DELETE FROM users WHERE id = ${req.params.id}`
        db.query(sql,(err,result)=>{
            if(err)throw err;
            res.send("Delete sucessfully")
        })
    },
    updateName(req,res){
        let newName = req.body.name;
        let sql = `UPDATE users SET user_name='${newName}' WHERE id=${req.params.id}`;
        db.query(sql,(err,result)=>{
            if(err)throw err;
            res.send('User UPDATED')
        })
    },
    orders(req,res){
        let sql = 'SELECT * FROM orders INNER JOIN users ON user_id=users.id'
        db.query(sql, (err,result)=>{
            if(err)throw err;
            res.send(result)
        })
    }
}


module.exports = userController;