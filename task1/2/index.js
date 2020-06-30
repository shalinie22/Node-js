const fs = require("fs");
const express = require("express");
const app = express();
const port = 3002;


  app.get("/", (req, res) => { 
    fs.readdir("./", (err, files) => { 
      if (err) throw err;
      console.log(files);
      res.send(files);
    });
   
});
app.listen(port, () => {
  console.log(`server is listening ${port}`);
});
