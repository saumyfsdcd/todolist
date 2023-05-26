const express=require("express");
const app=express();
const ejs=require("ejs");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}))
app.set("view engine", "ejs")

const date=new Date();
var r=date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear()
var array=[];
app.get("/", (req,res)=>{
    res.render("index", {r:r, array:array})
})

app.post("/", (req,res)=>{
    if(req.body.s!=""){
        array.push(req.body.s);

    }
    res.redirect("/")
})
app.listen(3000, ()=>{
    console.log("server started on port 3000")
})