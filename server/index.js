//const sql = require('./connection/config')
const express = require('express')
const dotenv = require('dotenv')
const path = require('path')
const routes = require('./routes')
const cors = require('cors')
const directory = require('./connection/directory')
const menu = require('./connection/menu.js')
let roles = directory.roles
let employees = directory.employees
let managers = directory.managers
let menuItems = menu.food_item
let orderOf = menu.name

dotenv.config()
const PORT = process.env.PORT || 3001;
const app = express();

app.use(
  cors({
    origin:"http://localhost:3000",
    methods:["GET", "POST", "PUT", "DELETE"],
  })
)

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(routes);



// Serve up static assets
app.use('/images', express.static(path.join(__dirname, '../client/images')));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(PORT,()=>console.log(`Now Listening on port: ${PORT}`))


