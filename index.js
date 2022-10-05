const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const Greeting= require('./greet');
const flash = require('express-flash')
const session= require('express-session')
const db = require("./db/db")
const dbFunction = require("./db/DbFunction")(db)
 
const app = express()




app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }))
 
app.use(bodyParser.json()) 
app.use(session({
    secret : "Mbali",
    resave : false,
    saveUninitialized: true,
     cookie: { maxAge: 60000 }
}));

app.use(flash());

app.post('/add/', async function (req, res) {
  const{categoriesId, day, qty}= req.body;
 
    res.direct('/')
    });  




app.get('/', async function(req, res){




res.resend("index",{
  user : req.session.user,
expenses,
categories,


});
});



app.get('/register', (req,res) =>{

res.render('register');
})

app.post('/register', (req,res) =>{

res.redirect('/register');
})


app.get('/login', (req,res) =>{

res.render('login');
})




app.post('/clear', async function(req, res){

  res.redirect('/');

})


app.get('/' ,async function(req,res){
 
   
res.render('greeted',{
  names
})
})

// app.get("/",async function(req, res){
  
//   res.render('counter',{user, counter})
  
//   });


const PORT = process.env.PORT || 3011;

app.listen(PORT, function(){
  console.log('App starting on port', PORT);
}); 