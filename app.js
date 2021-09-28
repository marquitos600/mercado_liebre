const express = require("express");
const app = express();
const path = require('path');


app.use(express.static ('public'));

app.listen(3030, () => 
    console.log("http://localhost:3030"));

    app.get('/', (req,res)=>
    {                                   
        res.sendFile(path.join(__dirname, './views/home.html'));
    });      

    app.get('/register', (req,res)=>
    {                                   
        res.sendFile(path.join(__dirname, './views/register.html'));
    });    

     app.post('/register', (req,res)=>
    {                                   
        res.redirect ('/');
    })

    app.get('/login', (req,res)=>
    {                                   
        res.sendFile(path.join(__dirname, './views/login.html'));
    })

    app.post('/login', (req,res)=>
    {                                   
        res.redirect ('/');
    })

    app.post("/search", (req, res) => {
        res.redirect("/");
      });