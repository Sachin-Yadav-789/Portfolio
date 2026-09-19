const express = require("express");
const app = express();
const port  = 3000;
const path = require("path");
app.set("views",path.join(__dirname,"/views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public/css"))); 
app.use(express.static(path.join(__dirname,"public/js"))); 
app.get("/info",(req,res) =>{

  res.render("about.ejs");
})          



app.listen(port, ()=>{
  console.log(`app listen on port ${port}`);
});