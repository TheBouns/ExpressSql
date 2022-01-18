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
app.get("/productsTable2",(req,res)=>{
    let sql = 'CREATE TABLE products2(id int AUTO_INCREMENT, category_id int ,product_name VARCHAR(45), product_price int, product_serial_number VARCHAR(45),  PRIMARY KEY (id), FOREIGN KEY(category_id) REFERENCES categories(id) ON DELETE CASCADE)'
    db.query(sql, (err,result)=>{
        if(err)throw err;
        res.send('Table has been created');
    })
})
app.get("/users",(req,res)=>{
    let sql= 'CREATE TABLE users(id int AUTO_INCREMENT, user_name VARCHAR(45), user_email VARCHAR(45), PRIMARY KEY (id))'
    db.query(sql, (err,result)=>{
        if(err)throw err;
        res.send('Table has been created');
    })
})
app.get("/orders", (req,res)=>{
    let sql = 'CREATE TABLE orders(id int AUTO_INCREMENT, user_id int,order_numb VARCHAR(45), PRIMARY KEY (id), FOREIGN KEY (user_id)  REFERENCES users(id) ON DELETE CASCADE)'
    db.query(sql, (err,result)=>{
        if(err)throw err;
        res.send('Table has been created');
    })
})
app.post("/users", (req,res)=>{
    let post= {user_name: req.body.name , user_email : req.body.mail}
    let sql= 'INSERT INTO users SET ?';
    db.query(sql,post,(err,result)=>{
        if(err)throw err;
        res.send(`${post.user_name} has added`);
    })
})
app.put("/users/:id", (req,res)=>{
    let newName = req.body.name;
    let sql = `UPDATE users SET user_name='${newName}' WHERE id=${req.params.id}`;
    db.query(sql,(err,result)=>{
        if(err)throw err;
        res.send('User UPDATED')
    })
})
app.get("/showUsers",(req,res)=>{
    let sql = 'SELECT * FROM users';
    db.query(sql,(err,result)=>{
        if(err)throw err;
        res.send(result)
    })
})
app.get("/showOrders",(req,res)=>{
    let sql = 'SELECT * FROM orders';
    db.query(sql, (err,result)=>{
        if(err)throw err;
        res.send(result)
    })
})
app.get("/ordersUSers",(req,res)=>{
    let sql = 'SELECT * FROM orders INNER JOIN users ON user_id=users.id'
    db.query(sql, (err,result)=>{
        if(err)throw err;
        res.send(result)
    })
})
app.get("/users/:id", (req,res)=>{
    let sql = `SELECT * FROM users WHERE id=${req.params.id}`
    db.query(sql,(err,result)=>{
        if(err)throw err;
        res.send(result);
    })
})
app.delete("/usersdelete/:id",(req,res)=>{
    let sql = `DELETE FROM users WHERE id = ${req.params.id}`
    db.query(sql,(err,result)=>{
        if(err)throw err;
        res.send("Delete sucessfully")
    })
})
app.post("/orders", (req,res)=>{
    let post= {user_id: req.body.user_id , order_numb : req.body.numb}
    let sql= 'INSERT INTO orders SET ?';
    db.query(sql,post,(err,result)=>{
        if(err)throw err;
        res.send(`${post.order_numb} has added`);
    })
})

app.post("/productsTable2",(req,res)=>{
    let post = {category_id : req.body.id, product_name: req.body.name, product_price: req.body.price, product_serial_number: req.body.serial};
    let sql = 'INSERT INTO products2 SET ?'
    db.query(sql,post,(err,result)=>{
        if(err)throw err;
        res.send(`${post.product_name} has added`);
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

app.get("/categories/:id",(req,res)=>{
    let sql = `SELECT * FROM categories WHERE id=${req.params.id}`;
    db.query(sql,(err,result)=>{
        if(err)throw err;
        res.send(result);
    })
})
app.get("/productName/:name",(req,res)=>{
   
    
    let sql = `SELECT * FROM products WHERE product_name  ="${req.params.name}"`
    db.query(sql,(err,result)=>{
        if(err)throw err;
        res.send(result);
    })
})

app.delete("/deleteProduct/:id",(req,res)=>{
    let sql = `DELETE FROM products2 WHERE id = ${req.params.id}`
    db.query(sql,(err,result)=>{
        if(err)throw err;
        res.send("Delete sucessfully")
    })
})






app.listen("65000", ()=>{
    console.log("Toaster its on WORK!!!")
})

