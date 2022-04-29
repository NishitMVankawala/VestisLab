const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(fileUpload({
  createParentPath: true
}));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// Newly added for DB connection
var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
// var logger = require('morgan');
var bodyParser = require('body-parser');
var flash = require('express-flash');
var session = require('express-session');
var db=require('./database');

app.post("/picture", async (req, res) => {
  try {
    console.log("try Entered >>>>>");
    if(!req.files){
        console.log("If Entered >>>>>");
      res.send({
        status: false,
        message: "No files"
      })
    } else {
        console.log("Else Entered >>>>>");
        
      const {picture} = req.files;
      const {file_name} = req.body;
      console.log(picture);
      console.log(file_name);
      picture.mv("../uploads/" + file_name)

      res.send({
        status: true,
        message: "File is uploaded"
      })
    }
  } catch (e) {
    console.log("catch Entered >>>>>");
    res.status(500).send(e)
  }
})

app.post("/api/auth/signin", async (req, res) => {
  try {
    console.log("try Entered in api/auth/signin >>>>>");
    console.log(req.body);
    var email = req.body.email;
    var password = req.body.password;
   
    var sql = `SELECT * FROM v_users WHERE email="${email}" AND password ="${password}"`;
    db.query(sql, function(err, result) {
      if (err) throw err;
      console.log('record inserted');
      console.log(result);
      // req.flash('success', 'Data added successfully!');
      // res.redirect('/');
    });

  } catch (e) {
    console.log("catch Entered >>>>>");
    res.status(500).send(e)
  }
})

const port = process.env.PORT || 4000

app.listen(port, () => console.log(`Server is running on port ${port}`))