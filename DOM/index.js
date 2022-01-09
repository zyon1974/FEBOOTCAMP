// un solo elemento

document.querySelector("h1").innerhtml = "zio cagnaccio"; // posso selezionare combinazioni

document.querySelector("li a").innerHTML = "fottiti";
document.querySelector("li a").style.color = "#fff000";
document.querySelector("li.item").style.color = "orange"; // solo il primo item

document.getElementById("rosco").innerHTML = "sono rosco";  
document.getElementsByTagName("li")[3].innerHTML = "quadrupede"; // funziona con array
document.getElementsByClassName("btn")[0].innerHTML = "sono un bottone"; // funziona con array




document.querySelectorAll("ul > .item")[5].innerHTML = "cucu"; // funziona ad array
document.querySelectorAll("ul > .item")[5].style.fontWeight = "bold"; // funziona ad array
document.querySelectorAll("ul > .item")[4].style.fontSize = "3rem"; // funziona ad array
document.querySelectorAll("ul > .item")[3].style.fontSize = ".8rem"; // funziona ad array


var zioCane = document.querySelector("button").classList;
console.log(zioCane);

document.querySelector("button").classList.add("invisibile");
document.querySelector("button").classList.remove("invisibile");
document.querySelector("button").classList.toggle("invisibile"); // se c'è via, se non c'è aggiunge

document.querySelector("h1").classList.add("big"); // funziona sul primo

// innerHTML != textContent 



console.log(document.querySelector("a").attributes);

console.log(document.querySelector("a").getAttribute("href"));

console.log(document.querySelector("a").setAttribute("href", "https://www.zyon.it"));