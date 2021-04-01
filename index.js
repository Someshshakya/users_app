require('dotenv').config();
const express = require('express');
const BodyParser = require('body-parser');
const app = express();
app.use(BodyParser.urlencoded({extended:true}))
app.use(express.json());
const PORT = process.env.PORT || 7000;

//Set EJS as templating engine
app.set('view engine', 'ejs');

// users services
const users = require('./routes/users')
app.use(users);

//db set_up
app.use(require('./models/db_config'));
//create tabel for users
// const table  = require('./models/users_table')


app.listen(PORT,()=>{
    console.log(`Server is running on port..  ${PORT}`)
})