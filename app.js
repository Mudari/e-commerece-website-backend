const express = require('express');
const app = express();

app.use(express.static(__dirname+'/public'));

app.get('/index.html',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
})

app.get('/login.html',(req,res)=>{
    res.sendFile(__dirname+'/login.html');
})

app.get('/register.html',(req,res)=>{
    res.sendFile(__dirname+'/register.html');
})

app.get('/add-to-cart.html',(req,res)=>{
    res.sendFile(__dirname+'/add-to-cart.html');
})
app.get('/email.html',(req,res)=>{
    res.sendFile(__dirname+'/email.html');
})

app.listen(9090);