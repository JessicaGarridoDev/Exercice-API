// Application Express 
const express = require('express');
const app = express();
const bodyParser = require("body-parser")
const cors = require("cors");

//Middlewwares
app.use(cors())
app.use(bodyParser.json())
  
//Routes

app.post("/api/products", (req, res) => {
    const product = req.body
    res.send({ product : req.body })
})
//enregistre « Requête reçue ! » dans la console et passe l'exécution
app.use((req, res, next) => {
  console.log('Requête reçue !');
  next();
});

//ajoute un code d'état 201 à la réponse et passe l'exécution
app.use((req, res, next) => {
  res.status(201);
  next();
});

//envoie la réponse JSON et passe l'exécution
app.use((req, res, next) => {
   res.json({ message: 'Votre requête a bien été reçue !' }); 
    next();
});

//enregistre « Réponse envoyée avec succès ! » dans la console
app.use((req, res, next) => {
  console.log('Réponse envoyée avec succès !');
});

module.exports = app;

//Fin middlewares

