function load(){
    var handcardslist = handcards.split(/\n/gi);
    //console.log(handcardslist)
    handcardslist.forEach(element => {
        var option = document.createElement("option");
        option.innerText = element;
        $( ".handcards" ).append(option);
       
    });
    var combatcardslist = combatcards.split(/\n/gi);
    //console.log(handcardslist)
    combatcardslist.forEach(element => {
        var option = document.createElement("option");
        option.innerText = element;
        $( ".combatcards" ).append(option);
       
    });
    var improvcardslist = improvcards.split(/\n/gi);
    //console.log(improvcardslist)
    improvcardslist.forEach(element => {
        var option = document.createElement("option");
        option.innerText = element;
        $( ".improvcards" ).append(option);
       
    });
}