
const path = require('path');
const express = require('express');
const bodyParser=require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: false}))

app.get('/',(req,res)=>{
 res.sendFile(path.join(__dirname,'/form.html'));
});

app.get('/Success',(req,res)=>{
    res.send('You are successfully login');
 });

app.get('/Failure',(req,res)=>{
    res.send('You cannot login');
 });

app.post('/processing',(req,res)=>{
    console.log(req.body);
 if(req.body.username === "admin" && req.body.password === "admin@123")
   res.redirect('/Success');
 else
  res.redirect('/Failure');
});

app.listen(8000);
