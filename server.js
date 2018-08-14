const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
//heroku port using here 
const port = process.env.PORT || 3000 ;

var app = express();
app.set('view engine', 'hbs');
app.use(express.static(__dirname+'/public'));


app.get('/',(req,res) =>{
    res.send('Hello Express !');
});

app.get('/about',(req,res)=>{
res.render('about.hbs');
});

app.get('/bad', (req,res)=>{
    res.send({
        errorMessage:'this is Error page'
    });
});

app.get('/projects',(req,res) => {
res.render('projects.hbs',{
    pageTitle:'projects'
});
});

app.listen(port, () => {
    console.log("server is up on port $[port]");
});