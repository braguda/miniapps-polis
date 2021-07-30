$(document).ready(() => {
    console.log("ready");

    //buttons
    var toDo = $("#listApp");
    var calc = $("#calcApp");
    var restaurant = $("#restaurantApp");
    var mapper = $("#mapApp");
    var settings = $("#settingsApp");
    
    //button clickers

    toDo.click(() => {
        console.log("clicked to do")
        window.location.href="toDo.html";
    });

    calc.click(() => {
        console.log("clicked calculator");
        window.location.href="calculator.html";
    });

    restaurant.click(()=> {
        console.log("clicked restaurant");
        window.location.href="restaurant.html";
    });

    mapper.click(() => {
        console.log("clicked map")
        window.location.href="mapper.html";
    });

    settings.click(() => {
        console.log("clicked settings");
        window.location.href="settings.html";
    });



});