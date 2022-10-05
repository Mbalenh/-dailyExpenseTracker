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


app.post('/addcategories', async function (req, res) {
  const{categoriesAdd}= req.body;
  await dbFunction.addExpenses(categoriesAdd)
 
    res.direct('/')
    });  

app.get('/', async function(req, res){

if(!req.session.user){
res.redirect('/login');
return;
}
const category = await dbFunction.categories();
const expense= await dbFunction.expenses();

const joinList=await dbFunction.ManyorNone('select * from expenses joun categories on categoriesId= categoriesId');

const getUser= req.session.user.firstname;


res.resend("index",{
  user : req.session.user,
expenses,
categories,


});
});



app.get('/register',async function (req,res){



res.render('register');
})

app.post('/register',async function (req,res){

   await dbFunction.register(firstname,lastname,email,password);

   const code=uid();
   const {firstname} =req.body;
   const {laststname} =req.body;
   const {email} =req.body;

   const findUserEmail ="select count (*) from users where email=$1";
   const result = await dbFunction.one(findUserEmail,email)

   if(firstname && lastname &&email && password){

if(Number(results.count) !==0){
req.flash('error',"user already exist")

}else{
await dbFunction.register(firstname,lastname,email,password);
req.flash('success',"user have been added,please use code: $(code) to login in")

}


   }else{

req.flash('error',"Please add alll the field")
   }

res.redirect('/register');
})


app.get('/login',async function (req,res){

res.render('login');
})




app.post('/login', async function(req, res){

  await dbFunction.login(email,password);
 const {email} =req.body;
   const {code} =req.body
   const user = await dbFunction.login(code);

   if(email && code){
if(user){
 req.session.user = user;
  res.redirect('/');
  return
   }
}else{
  req.flash('error',"Please add alll the field")
}

  res.render('login');

})


// app.get('/' ,async function(req,res){
 
   
// res.render('',{

// })
// })

// app.get("/",async function(req, res){
  
//   res.render('counter',{user, counter})
  
//   });


const PORT = process.env.PORT || 3011;

app.listen(PORT, function(){
  console.log('App starting on port', PORT);
}); 