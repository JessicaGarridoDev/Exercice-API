
const http = require('http'); // Importation du package HTTP natif de Node
const app = require('./app'); // Importation de app.js

app.set('port', process.env.PORT || 3000); // Dire à l'app express sur quel port elle  va tourner
const server = http.createServer(app) // fonction exécutée à chaque appel effectué vers ce serveur
    

server.listen(process.env.PORT || 3000); // Configuration du serveur pour qu'il écoute soit la variable d'environnement, soit le port 3000








