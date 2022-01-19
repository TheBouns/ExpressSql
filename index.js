const express = require ("express");
const app = express();
app.use(express.json());

app.use("/products",require("./routes/products"));
app.use("/orders", require("./routes/orders"))
app.use("/users", require("./routes/users"))
app.use("/categories"), require("./routes/categories")


app.listen("65000", ()=>{
    console.log("Toaster its on WORK!!!")
})

