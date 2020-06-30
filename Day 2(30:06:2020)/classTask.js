const express=require("express");
const http = require("http");
const fs=require("fs")
const bodyParser=require("body-parser");

const app=express();
const port=3000;
app.use(bodyParser.json());
app.post("/",(req,res)=>{
  fs.writeFile(`${req.body.name}.txt`,req.body.content,(err)=>{
    if(err) throw err;
    console.log("created")
  });
});
app.listen(port, () => {
    console.log(`server is listening ${port}`);
  });
