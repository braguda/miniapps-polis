$(document).ready(() => {
    console.log("ready");
    var seafood = ["Salmon", "Scallops", "Mussels", "Calamari", "Caviar", "Rainbow Trout"];
    var poultry = ["Chicken", "Duck"];
    var redMeat = ["Beef", "Bison", "Pork"];
    var whiteWine = ["Pinot Grigio", "Chardonay", "Sauvignon Blanc"];
    var redWine = ["Merlot", "Cabernet Sauvignon", "Pinot Noir"];

    function display(callback, array){
        for (let i = 0; i < array.length; i++) {
            callback(array[i]);
        };
    };  

});

