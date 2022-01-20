const query = "Naples";
const apiKey = "049575390e2f0f1f2ce9f8b1948f9ffd";
const unit = "metric";
const url = "https://api.openweathermap.org/data/2.5/weather?id=524901&appid=" + apiKey + "&q=" + query + "&units=" + unit;

// chiamata get alla API usando il modulo 'HTTPS' nativo
https.get(url, function(response) {

    //console.log(response);
    //console.log(response.statusCode);
    
    response.on("data", function(data) {

        console.log(data); // exadecimal response

        const weatherData = JSON.parse(data); // il metodo JSON.parse converte i dati in formato JSON
        //console.log(weatherData);

        const temp = weatherData.main.temp;
        const weatherDescription = weatherData.weather[0].description;
        const icon = weatherData.weather[0].icon;
        const imageURL = "https://openweathermap.org/img/wn/" + icon + "@2x.png";

        res.write("<p>tempo: " + weatherDescription + "</p>");
        res.write("<h1>ci sono: " + temp + " gradi </h1>");
        res.write("<img src='" + imageURL + "'>");
        res.send();
    });
});

//res.send("Server up and runnin'"); // attenzione! un solo 'send' per app