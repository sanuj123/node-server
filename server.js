const express = require('express');
const hbs = require('hbs');


var app = express();
app.set('view engine', 'hbs');


app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} :: ${req.method},  ${req.url}`);
    next();
});

app.use((req, res, next) =>{
    res.render('maintainence.hbs')
});

app.use(express.static(__dirname + '/public'));

app.get('/',(req, res) => {
//    res.send('<h1>Hello Express !!</h1> <br>');
    res.send({
       name: 'Sanuj',
       type: 'HELL YEAH !!!',
       arr: [
           '1','2','3'
       ]    
    });
});

app.get('/about', (req, res) => {
   res.render('about.hbs',{
       pageTitle: 'About San',
       msg: 'Here comes the msg',
       date: new Date().getFullYear()
   }); 
});
app.listen(3000);