const express = require('express')
  , cors = require('cors')
  , app = express();
app.options('*', cors());
const bodyParser = require('body-parser');
// const cors = require('cors')

// MIDDLEWARE
// app.use(function(req, res, next) {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.setHeader("Access-Control-Allow-Credentials", "true");
//     res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
//     res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
//     next()
// });

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());

app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  }); 
  

// ROUTERS
const userRouter = require('./routes/users');
const recipeRouter = require('./routes/recipes');
const favoriteRouter = require('./routes/favorites');
const groceryRouter = require('./routes/groceries');
const webscrape = require('./routes/webscrape')


// BROWSER ROUTES
app.use('/users', userRouter);
app.use('/recipes', recipeRouter);
app.use('/favorites', favoriteRouter);
app.use('/groceries', groceryRouter);
app.use('/webscrape', webscrape)

module.exports = {app}