const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const db = require('./config/database')



//Testing for connection
db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


//Init app
const app = express();

//express-handlebars setting
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

//router path
app.use('/User', require('./routes/User'))


//Listen server with port 3000
app.listen(3000, function(){
    console.log('server is running')
})