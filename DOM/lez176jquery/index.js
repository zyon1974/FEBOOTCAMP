//alert("pippo");

// document ready function aspetta il caricamento della libreria jquery, ma posso farne a meno facendo l'embed in fondo al doc html
//$(document).ready(function() {

    //$("h1").css("color", "red");  
    
    console.log($("h1").css("font-size"));
    console.log($("h1").css("color"));

    $("h1").addClass("porcodio lemadonne");

    $("h1").text("zio cagnaccio");
    
    $("button").html("<em>hey</em>");  // come innerHTML

    $("img").attr("src", "https://images.unsplash.com/photo-1625571705670-38fc39c923ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80");


    // event listener in jquery
    $("h1").click(function() {
        $("h1").css("color", "purple");  
        $("h1").before("<h2>pippo</h2>")  
        $("h1").after("<h2>pluto</h2>")  
        $("h1").prepend("<em> pippo </em>")  
        $("h1").append("<strong> pluto </strong>")  
    });

    $("button").click(function() {
        $("h1").css("color", "pink"); 
        $("h2").remove();  
        $("em").remove();  
        $("strong").remove();  
    });

    $("input").keydown(function(e) {
        $("h1").text(e.key);
    });


//})
