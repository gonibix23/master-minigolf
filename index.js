const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require("dotenv").config({path: "./variables.env"})

mongoose.connect(process.env.DATABASE);

mongoose.connection.on("error", function(error){
    console.log("Error de mongoose:", error);
});

require("./Schemas/Persona");
const modeloPersona = mongoose.model("Persona");

const app = express();

app.use(bodyParser());

app.get('/', function(req, res){
    res.send('Hola mundo');
});
app.get('/hola', function(req, res) {
    res.send('Hola en la ruta /hola');
});

app.get("/nueva-persona", function(req, res){
    const miPersona = new modeloPersona({
        name: req.query.name,
        email: req.query.email,
        username: req.query.username,
        password: req.query.password,
        age: req.query.age
    });
    miPersona.save().then(function(){
        res.send("Persona guardada");
    });
});

app.get("/personas/gonzalo", function(req, res){
    // http://localhost:55555/personas/gonzalo?name=gonzalo    ? ----> query parameters
    const search = {
        name: req.query.name
    };
     
    modeloPersona.find(search).then(function(users){
        res.send(users);
    });
});

app.listen(process.env.PORT, function(){
    console.log("Aplication escuchando en puerto https://localhost:55555");
});

console.log('Hola "mundo" desde NodeJS')
