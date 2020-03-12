const express = require("express");
var cors = require('cors')


// porta onde vai rodar o servidor
const port = 3002;
const app = express();

// evitar cors
app.use(cors());

// subindo o servidor
app.listen(port, function() {
  console.log("Server is running on " + port + " port");
});

// unico metodo de entrada
app.get("/products", function(req, res) {
  const response = {
    "productList": [
      {
        "name": "Produto um",
        "description": "cena de Rei leão O filme, Mufasa em cima da pedra do rei",
        "price": "10",
        "img": "http://tiny.cc/6505kz"
      },
      {
        "name": "Produto dois",
        "description": "lobos esfumados",
        "price": "20",
        "img": "http://tiny.cc/6505kz"
      },
      {
        "name": "Produto tres",
        "description": "um elefante na savana, caminhando para a camera",
        "price": "12.5",
        "img": "http://tiny.cc/6505kz"
      },
      {
        "name": "Produto quatro",
        "description": "uma lhama de perfil",
        "price": "21.5",
        "img": "http://tiny.cc/6505kz"
      },
      {
        "name": "Produto cinco",
        "description": "um lince lambendo o labio",
        "price": "10.5",
        "img": "http://tiny.cc/6505kz"
      },
      {
        "name": "Produto seis",
        "description": "um pinguim no gelo",
        "price": "30.0",
        "img": "http://tiny.cc/6505kz"
      }
    ]
  }

  res.send(response);
});

