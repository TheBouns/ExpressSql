# Express AND SQL

Exercises to practice endpoints with sql and express.

## What is inside ?
There is more than 200 lines about endpoints using  CRUD(get,post,put,delete).
I used diverse querys to add Tables to a database. 
```js
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
````
## License
[MIT](https://choosealicense.com/licenses/mit/)