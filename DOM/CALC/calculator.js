const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

// gestisce le richieste 'get'
app.get("/", function(req, res){
    //res.send("<h1>hello</h1>");
    res.sendFile(__dirname + "/index.html");   // '__dirname' prende il percorso relativo dellla cartella
    console.log("home");
});

// gestisce le richieste 'post'
app.post("/", function(req, res){
    // recupera i dati in 'post' sulla pagina (è un metodo di 'body-parser')
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;
    res.send("<h3>la somma è " + result + "</h3>");
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
});

