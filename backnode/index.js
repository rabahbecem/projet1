const bodyParser = require('body-parser');
var express = require('express');
var app = express();
var mysql = require('mysql');
const cors = require('cors');
app.use(bodyParser.json())
app.use(cors());
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database:"test"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  
   
});
app.post('/login',(req,res)=>{
   con = mysql.createConnection({
    host: "localhost",
    user: req.body.user,
    password: req.body.password,
    database: req.body.database
  });
con.connect(function(err) {
  if (err) {console.log(err,'erreuur de connection');
  res.send({
    message:"erreur de connection"
  })  
  
}
  else{
  console.log("Connected!");
  res.send({
    message:"connected!"
  })  
  }
});
})
app.get('/user',(req,res)=>{
  
  let qr = 'select * from user';
  con.query(qr,(err,result)=>{
    if(err){
      console.log(err,'erreuur');
    }
    else{
      res.send({
       users:result
      
      })
    }
  })
});
app.post('/user',(req,res)=>{
  let uid = req.body.id;
  let qr = 'select * from user where id = '+uid;
  con.query(qr,(err,result)=>{
    if(err){ console.log(err);}
    if(result.length>0){
      res.send({
        message: 'get single data',
        data:result
      });
    }
    else {
      res.send({
        message:'data not found'
      });
    }
  })
})

// '/' est la route racine
app.get('/', function (req, res) {
  res.send('Bonjour !');
});

app.listen(4000, function () {
  console.log("Application d'exemple écoutant sur le port 4000 !");
});