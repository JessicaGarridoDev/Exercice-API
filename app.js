// Application Express 
const express = require('express');

const app = express();

// Méthode app.use qui reçoit la requête & la réponse
app.use((req, res) => {
   res.json({ message: 'Votre requête a bien été reçue !' }); 
});
module.exports = app;
// Fin applicaion Express

