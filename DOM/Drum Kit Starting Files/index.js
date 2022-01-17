// drum batteria

// document.querySelector("button").addEventListener("click", handleClick);
// function handleClick() {
//     alert("I got cliccked!");
// } 


// anche in versione anonimous function
// document.querySelector("button").addEventListener("click", function() {
//     alert("I got not cliccked!");
// });

var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumButtons; i++ ) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        //alert(" got not cliccked!");

        //console.log(this.innerHTML );
        
        var buttonInnerHTML = this.innerHTML;
 
        switch (buttonInnerHTML) {
            case "w":
                var tom1 = new Audio('sounds/tom-1.mp3');
                tom1.play();  
            break;

            case "a":
                var tom2 = new Audio('sounds/tom-2.mp3');
                tom2.play();  
            break;

            case "s":
                var tom3 = new Audio('sounds/tom-3.mp3');
                tom3.play();  
            break;

            case "d":
                var tom4 = new Audio('sounds/tom-4.mp3');
                tom4.play();  
            break;

            case "j":
                var snare = new Audio('sounds/snare.mp3');
                snare.play();  
            break;

            case "k":
                var crash = new Audio('sounds/crash.mp3');
                crash.play();  
            break;

            case "l":
                var kick = new Audio('sounds/kick-bass.mp3');
                kick.play();  
            break;

            default: console.log(buttonInnerHTML);
        }
    });  
}

// 'e' è una lettera/variabile che scelgo io per intercettare l'oggetto del listener che reagisce al keydown (l'eventlistener mette in 'e' il risultato del suo 'essere in ascolto')
document.addEventListener("keydown", function(e) {
    console.log(e.key);
    makeSound(e.key);
});

function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();  
        break;

        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();  
        break;

        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();  
        break;

        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();  
        break;

        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();  
        break;

        case "k":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();  
        break;

        case "l":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();  
        break;

        default: console.log(key);
    }}




