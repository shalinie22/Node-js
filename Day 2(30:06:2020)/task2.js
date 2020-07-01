const fs = require("fs");

const express = require("express");

const bodyParser = require("body-parser");

const app = express();
const port = 4000;

app.use(bodyParser.json());

const rooms=[];
const bookrooms=[];

app.post("/createaRoom",(req,res)=>{
    console.log(req.body);
    rooms.push(req.body);
    res.send(rooms);

});

app.post("/listAllRooms",(req,res)=>{
    console.log(req.body);
    bookrooms.push(req.body);
    res.send(bookrooms);
});

app.get("/bookroom",(req,res)=>{
    let rooms = bookrooms.map((data) => {
        return {
          RoomID: data.RoomID,
          Status: "Booked",
          CustomerName: data.CustomerName,
          Date: data.Date,
          StartTime: data.StartTime,
          EndTime: data.EndTime,
        };
      });
      res.json(rooms);
});
app.get("/listallcustomers",(req,res)=>{
    let customer = bookrooms.map((data) => {
        return { CustomerName: data.CustomerName, RoomID: data.RoomID };
      });
      res.json(customer);
});

app.listen(process.env.PORT || port, () => {
    console.log(`Server is listening to port ${port}`);
  });
