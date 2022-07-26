
const http = require('http'); // Importation du package HTTP natif de Node
const app = require('./app'); // Importation de app.js
// fonction qui renvoie un port valide, qu'il soit fourni sous la forme d'un numéro ou d'une chaîne
const normalizePort = val => {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
};
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

// fonction qui recherche les différentes erreurs et les gère de manière appropriée. Elle est ensuite enregistrée dans le serveur
const errorHandler = error => {
    if (error.syscall !== 'listen') {
      throw error;
    }
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges.');
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(bind + ' is already in use.');
        process.exit(1);
        break;
      default:
        throw error;
    }
  };

const server = http.createServer(app);// fonction exécutée à chaque appel effectué vers ce serveur

// un écouteur d'évènements est également enregistré, consignant le port ou le canal nommé sur lequel le serveur s'exécute dans la console.
server.on('error', errorHandler);
server.on('listening', () => {
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
  console.log('Listening on ' + bind);
});

server.listen(port);


//MongoDB
const mongoose = require("mongoose");
const password = "1234";
const userName = "test";
const uri = `mongodb+srv://${userName}:${password}@cluster0.fhwrtpi.mongodb.net/test?retryWrites=true&w=majority`

//Schéma mongoose 
const {Schema} = mongoose;

const modelSchema = new Schema({
    name: String,
    description: String,
    price : Number,
    inStock: Boolean
})
const Product = mongoose.model("Product", modelSchema) 

const product1 = new Product()
product1.save().then(() => console.log("Product saved"))

//Connection à Mongoose
mongoose.connect(uri).then(() => {
console.log("Connected to database")
}).catch((err) => console.error(err))












