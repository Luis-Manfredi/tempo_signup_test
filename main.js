//Imports
const express = require("express");
const app = express();

//Settings
app.set("port", 3000);
app.set("appName", "Tempo_signUp");
app.set("view engine", "ejs");

//Database
let users = [];

//Middlewares
function logger(req, res, next){
    console.log("Page loaded");
    next();
}
app.use(logger);
app.use(express.static("public"));
app.use(express.static(__dirname + "/public/JS"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Paths
app.get("/home", (req, res) =>{
    res.render("index.ejs");
});

app.get("/signup", (req, res) =>{
    res.render("signup.ejs");
});

app.post("/signup", (req, res) =>{
    // console.log(req.body);
    users.push(req.body);
    console.log(users);
    console.log(users.length);
    res.render("profile.ejs", {data: req.body});
});

//Listener
app.listen(app.get("port"), () =>{
    console.log("Server online on port:", app.get("port"));
    console.log("App name:", app.get("appName"));
});


