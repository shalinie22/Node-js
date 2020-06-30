const fs = require("fs");
const express = require("express");
const app = express();
const port = 4000;
const path = require("path");
app.get("/", (req, res) => {
  fs.writeFile("date-time.txt", SetTime("./date-time.txt"), (err) => {
    if (err) throw err;
    console.log("sets the date");
  });
  function SetTime(file) {
    const { birthtime } = fs.statSync(file);
    return birthtime;
  }
  fs.readFile("date-time.txt","utf8",(err,files)=>{
    if (err) throw err;
    res.send(files);
  })
});
app.listen(port, () => {
  console.log(`server is listening ${port}`);
});
