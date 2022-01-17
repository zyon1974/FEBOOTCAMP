

    var canvas = document.querySelector('#my-canvas');
    var context = canvas.getContext('2d');

    var a,b;



document.addEventListener("click", function(e) {
    console.log(e);
    a = (e.screenX);
    b = (e.screenY);    

});