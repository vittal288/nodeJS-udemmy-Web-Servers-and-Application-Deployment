const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
//----------------------------------
var app = express();

var PORT = process.env.PORT || 3000;


hbs.registerPartials(__dirname+'/views/partials');
app.set('view engine','hbs');


//register a middleware to express using following syntax
/**
 * Whenver the middleware finish its job then next() method will call furhter code , if you did not call then the application will be in HALT mode.
 */
app.use((req,res,next)=>{   
    var now = new Date().toString();
    var log = `${now} ${req.method} ${req.url}`;
    console.log(log);
    fs.appendFile("server.log",log+'\n');
    next();
});

// app.use((req,res,next)=>{
//     res.render('maintenance.hbs');
// });

app.use(express.static(__dirname+'/public'));




// hbs.registerHelper('getCurrentYear',()=>{
//     return new Date().getFullYear();
// });
//ES6 syntax: if there is single line and return statement in a function but those are not required in ES6 syntax;
hbs.registerHelper('getCurrentYear',()=>new Date().getFullYear());

//convert to uppercase
hbs.registerHelper('screamIt',(text)=>{
    return text.toUpperCase();
});




app.get('/',(req,res)=>{   
    res.render('home.hbs',{
        pageTitle:"Home Page",
        welcomeMsg:"Welcome to the site"        
    })
});

app.get('/about',(req,res)=>{   
    res.render('about.hbs',{
        pageTitle:"About Page",        
    });
});

app.get('/bad',(req,res)=>{
    res.send({
        ErrorMessage:"Unable to fetch the data"
    })
});



app.listen(PORT,()=>{
    console.log(`Server is up on ${PORT} port`);
});