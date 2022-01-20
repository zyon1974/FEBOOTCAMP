const express = require("express");

const app = express();

// cosa rispondere quando viene fatta una richiesta da un browser sulla porta 3000
app.get("/", function(req, res){
    //console.log("************************************************************************");
    //console.log(req);
    //console.log("************************************************************************");
    res.send("<h1>hello girls!</h1>");
    console.log("home");
});

app.get("/contact", function(req, res){
    res.send("Contact me at info@zyon.it");
    console.log("cotact");
});

app.get("/about", function(req, res){
    res.send("I'm zyon");
    console.log("about");
});

// avvio un listener sulla porta 3000
app.listen(3000, function() {
    console.log("Server started on port 3000");
});