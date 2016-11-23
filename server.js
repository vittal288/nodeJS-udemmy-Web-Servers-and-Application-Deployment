const express = require('express');
const hbs = require('hbs');
//----------------------------------
var app = express();

app.set('view engine','hbs');
app.use(express.static(__dirname+'/public'));

//console.log(__dirname);

app.get('/',(req,res)=>{
    //res.send('Hello Express');

    // res.send({
    //     name:"Vittal",
    //     likes:[
    //         "Biking",
    //         "Exploring"
    //     ]
    // });

    res.render('home.hbs',{
        pageTitle:"Home Page",
        welcomeMsg:"Welcome to the site",
        currentYear:new Date().getFullYear()
    })
});

app.get('/about',(req,res)=>{
    //res.send("About Page");
    res.render('about.hbs',{
        pageTitle:"About Page",
        currentYear:new Date().getFullYear()
    });
});

app.get('/bad',(req,res)=>{
    res.send({
        ErrorMessage:"Unable to fetch the data"
    })
});



app.listen(3000,()=>{
    console.log("Server is up on 3000 port")
});