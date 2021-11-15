
const express = require("express");
const app = express();
app.use('/static',express.static("public")); 
app.use(express.urlencoded({ extended: true })); 
//view engine 
app.set("view engine","ejs");
//get method 
app.get('/',(req, res) => {
    res.render('htm.ejs');
    });
//Post Method
app.post('/',(req, res) => {
    console.log(req.body);
    });

app.listen(3000, () => console.log("Server Up and running"));