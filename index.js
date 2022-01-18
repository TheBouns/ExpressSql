const express = require ("express");
const app = express();
const mysql = require("mysql2");
app.use(express.json());

const db = mysql.createConnection({
    host : 'localhost',
    user: 'root',
    password: 'sanroque',
    database: 'expressdb'
});

db.connect();

app.get("/createDB",(req,res)=>{
    let sql = 'CREATE DATABASE expressDB';
    db.query(sql,(err,result)=>{
        if(err)throw err;
        res.send('DB has been created');
    })
})

app.get("/categories",(req,res)=>{
    let sql = 'CREATE TABLE categories (id int AUTO_INCREMENT, name_category VARCHAR(45), PRIMARY KEY(id))';
    db.query(sql,(err,result)=>{
        if(err)throw err;
        res.send('Table Has been created');
    })
})

app.get("/productsTable",(req,res)=>{
    let sql = 'CREATE TABLE products(id int AUTO_INCREMENT, category_id int ,product_name VARCHAR(45), product_price int, product_serial_number VARCHAR(45),  PRIMARY KEY (id), FOREIGN KEY(category_id) REFERENCES categories(id))'
    db.query(sql, (err,result)=>{
        if(err)throw err;
        res.send('Table has been created');
    })
})

app.post("/productsTable",(req,res)=>{
        let post = {category_id : req.body.id, product_name: req.body.name, product_price: req.body.price, product_serial_number: req.body.serial};
        let sql = 'INSERT INTO products SET ?'
        db.query(sql,post,(err,result)=>{
            if(err)throw err;
            res.send(`${post.product_name} has added`);
        })
})
app.post("/categories",(req,res)=>{
    let post = { name_category: req.body.name};
    let sql = 'INSERT INTO categories SET ?'
    db.query(sql,post,(err,result)=>{
        if(err)throw err;
        res.send(`${post.name_category} has added`);
    })
})

app.put("/categories/:id",(req,res)=>{
    let newName = req.body.name;
    let sql = `UPDATE categories SET name_category='${newName}' WHERE id=${req.params.id}`;
    db.query(sql,(err,result)=>{
        if(err)throw err;
        res.send('Completed')
    })
})

app.put("/productsTable/:id",(req,res)=>{
    let newName = req.body.name;
    let sql = `UPDATE products SET product_name='${newName}' WHERE id=${req.params.id}`;
    db.query(sql,(err,result)=>{
        if(err)throw err;
        res.send('Completed')
    })
})

app.get("/showProducts",(req,res)=>{
    let sql = 'SELECT * FROM products';
    db.query(sql,(err,result)=>{
        if(err)throw err;
        res.send(result);
    })
})
app.get("/showCategories",(req,res)=>{
    let sql = 'SELECT * FROM categories';
    db.query(sql,(err,result)=>{
        if(err)throw err;
        res.send(result);
    })
})

app.get("/productsCategory",(req,res)=>{
    let sql = 'SELECT * FROM products INNER JOIN categories ON category_id=categories.id'
    db.query(sql,(err,result)=>{
        if(err)throw err;
        res.send(result);
    })
})
app.get("/products/:id", (req,res)=>{
    let sql = `SELECT * FROM products WHERE id=${req.params.id}`
    db.query(sql,(err,result)=>{
        if(err)throw err;
        res.send(result);
    })
})

app.get("/productsDesc",(req,res)=>{
    let sql = 'SELECT * FROM products order by id DESC';
    db.query(sql,(err,result)=>{
        if(err)throw err;
        res.send(result);
    })
})
let col=0;






app.listen("65000", ()=>{
    console.log("Toaster its on WORK!!!")
})

