const express = require('express');
const path = require ('path');
require('dotenv').config();
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));



app.get('/', (req,res)=>{
    res.render('index');
})

app.listen(process.env.APP_PORT, ()=>{
    console.log("Servidor rodando na porta: " + process.env.APP_PORT);
})