const express = require('express');
const path= require('path');
const morgan = require('morgan');
const hbs = require('express-handlebars');
const methodOverride=require("method-override");
const app = express();
const port = 3000;
const route=require("./routes/index");
const db=require("./config/db");

db.connect();

app.use(express.static(path.join(__dirname,'public')));

app.engine('hbs', hbs.engine(
  {extname:".hbs",
  helpers:{
    sum:(a,b)=>a+b,
  }}
));
app.set('view engine', 'hbs');
app.set('views',path.join(__dirname,'resources','views'))


app.use(morgan('combined'));
app.use(methodOverride("_method"));
app.use(express.urlencoded(
  {
    extended:true
  }
));
app.use(express.json());

route(app);



app.listen(port, () => {
  console.log(`App listening on port ${port}`);
})