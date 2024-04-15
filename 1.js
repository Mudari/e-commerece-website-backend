const express=require('express');
const fs=require('fs');
const app=express();
var userid="";
app.use(express.static(__dirname));
app.use(express.urlencoded({extended:true}));
app.use("/submit", (req, res, next) => {
    const { username,usertype, password } = req.body;
    fs.readFile('JSON.json', (err,data) => {
        const users = JSON.parse(data);
        const user = users.find(u => u.username === username && u.usertype===usertype && u.password===password);
            if (user) {
                req.user = user;
                next();
            } else {
                res.status(401).send('Access Denied');
            }
        
    });
});


app.get("/",(req,res)=>{
    res.send("Welcome to Portal");
})
app.get("/login",(req,res)=>{
    res.sendFile(__dirname + "/login.html");
});
app.post('/submit',(req,res,next)=>{
    userid=req.user.username;
    res.sendFile(__dirname);
    
})
app.listen(4400);