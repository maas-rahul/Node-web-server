const express = require('express');
const hbs = require('hbs');

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


app.listen(3000);