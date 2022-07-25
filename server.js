
// création du serveur node.js

const http = require('http'); // Importation du package HTTP natif de Node

//Utilisation du package HTTP pour créer un serveur
const server = http.createServer((req, res) => { // fonction exécutée à chaque appel effectué vers ce serveur
    res.end('Voilà la réponse du serveur !'); //méthode end de la réponse pour renvoyer une réponse de type string
});

server.listen(process.env.PORT || 3000); // Configuration du serveur pour qu'il écoute soit la variable d'environnement, soit le port 3000

// Fin création du serveur node.js
