var puzzlename="Puzzle";
function load(){
    var handcardslist = handcards.split(/\n/gi);
    //console.log(handcardslist)
    handcardslist.forEach(element => {
        var option = document.createElement("option");
        option.innerText = element;
        $( ".handcards" ).append(option);
    });
    var combatcardslist = combatcards.split(/\n/gi); //combatcards
    //console.log(combatcards)
    combatcardslist.forEach(element => {
        var option = document.createElement("option");
        option.innerText = element;
        $( ".combatcards" ).append(option);
    });
    var improvcardslist = improvcards.split(/\n/gi) ;//improvcards
    //console.log(improvcardslist)
    improvcardslist.forEach(element => {
        var option = document.createElement("option");
        option.innerText = element;
        $( ".improvcards" ).append(option);
    });
    var towerslist = towers.split(/\n/gi) ; //Towers
    towerslist.forEach(element => {
        var option = document.createElement("option");
        option.innerText = element;
        $( ".towers" ).append(option);
    });
}
function process(){
    var editdata = emptypuzzle;
    editdata = editdata.replace("NAMEHERE",$( "#NAMEHERE" ).val());
    puzzlename=$( "#NAMEHERE" ).val();
    if (document.getElementById("SHOPEXISTS").checked == true){editdata = editdata.replace("SHOPEXISTS", "0");}
    else{editdata = editdata.replace("SHOPEXISTS","1");}
    //Mana and Gold
    editdata = editdata.replace("P0MANA",$( "#P0MANA" ).val());
    editdata = editdata.replace("P0GOLD",$( "#P0GOLD" ).val());
    editdata = editdata.replace("P1MANA",$( "#P1MANA" ).val());
    editdata = editdata.replace("P1GOLD",$( "#P1GOLD" ).val());
    //Improvements Player 0
    editdata = editdata.replace("I1P0SLOT1",$( "#I1P0SLOT1" ).val());
    editdata = editdata.replace("I1P0SLOT2",$( "#I1P0SLOT2" ).val());
    editdata = editdata.replace("I1P0SLOT3",$( "#I1P0SLOT3" ).val());
    editdata = editdata.replace("I1P0SLOT4",$( "#I1P0SLOT4" ).val());
    editdata = editdata.replace("I1P0SLOT5",$( "#I1P0SLOT5" ).val());
    editdata = editdata.replace("I2P0SLOT1",$( "#I2P0SLOT1" ).val());
    editdata = editdata.replace("I2P0SLOT2",$( "#I2P0SLOT2" ).val());
    editdata = editdata.replace("I2P0SLOT3",$( "#I2P0SLOT3" ).val());
    editdata = editdata.replace("I2P0SLOT4",$( "#I2P0SLOT4" ).val());
    editdata = editdata.replace("I2P0SLOT5",$( "#I2P0SLOT5" ).val());
    editdata = editdata.replace("I3P0SLOT1",$( "#I3P0SLOT1" ).val());
    editdata = editdata.replace("I3P0SLOT2",$( "#I3P0SLOT2" ).val());
    editdata = editdata.replace("I3P0SLOT3",$( "#I3P0SLOT3" ).val());
    editdata = editdata.replace("I3P0SLOT4",$( "#I3P0SLOT4" ).val());
    editdata = editdata.replace("I3P0SLOT5",$( "#I3P0SLOT5" ).val());
    //Improvements Player 1
    editdata = editdata.replace("I1P1SLOT1",$( "#I1P1SLOT1" ).val());
    editdata = editdata.replace("I1P1SLOT2",$( "#I1P1SLOT2" ).val());
    editdata = editdata.replace("I1P1SLOT3",$( "#I1P1SLOT3" ).val());
    editdata = editdata.replace("I1P1SLOT4",$( "#I1P1SLOT4" ).val());
    editdata = editdata.replace("I1P1SLOT5",$( "#I1P1SLOT5" ).val());
    editdata = editdata.replace("I2P1SLOT1",$( "#I2P1SLOT1" ).val());
    editdata = editdata.replace("I2P1SLOT2",$( "#I2P1SLOT2" ).val());
    editdata = editdata.replace("I2P1SLOT3",$( "#I2P1SLOT3" ).val());
    editdata = editdata.replace("I2P1SLOT4",$( "#I2P1SLOT4" ).val());
    editdata = editdata.replace("I2P1SLOT5",$( "#I2P1SLOT5" ).val());
    editdata = editdata.replace("I3P1SLOT1",$( "#I3P1SLOT1" ).val());
    editdata = editdata.replace("I3P1SLOT2",$( "#I3P1SLOT2" ).val());
    editdata = editdata.replace("I3P1SLOT3",$( "#I3P1SLOT3" ).val());
    editdata = editdata.replace("I3P1SLOT4",$( "#I3P1SLOT4" ).val());
    editdata = editdata.replace("I3P1SLOT5",$( "#I3P1SLOT5" ).val());
    // Hand Player 0
    if ($( "#HP0SLOT1" ).val()!="Empty"){editdata = editdata.replace("HP0SLOT1","\n" + $( "#HP0SLOT1" ).val());}
    else{editdata = editdata.replace("HP0SLOT1","");}
    if ($( "#HP0SLOT2" ).val()!="Empty"){editdata = editdata.replace("HP0SLOT2","\n" + $( "#HP0SLOT2" ).val());}
    else{editdata = editdata.replace("HP0SLOT2","");}
    if ($( "#HP0SLOT3" ).val()!="Empty"){editdata = editdata.replace("HP0SLOT3","\n" + $( "#HP0SLOT3" ).val());}
    else{editdata = editdata.replace("HP0SLOT3","");}
    if ($( "#HP0SLOT4" ).val()!="Empty"){editdata = editdata.replace("HP0SLOT4","\n" + $( "#HP0SLOT4" ).val());}
    else{editdata = editdata.replace("HP0SLOT4","");}
    if ($( "#HP0SLOT5" ).val()!="Empty"){editdata = editdata.replace("HP0SLOT5","\n" + $( "#HP0SLOT5" ).val());}
    else{editdata = editdata.replace("HP0SLOT5","");}
    if ($( "#HP0SLOT6" ).val()!="Empty"){editdata = editdata.replace("HP0SLOT6","\n" + $( "#HP0SLOT6" ).val());}
    else{editdata = editdata.replace("HP0SLOT6","");}
    if ($( "#HP0SLOT7" ).val()!="Empty"){editdata = editdata.replace("HP0SLOT7","\n" + $( "#HP0SLOT7" ).val());}
    else{editdata = editdata.replace("HP0SLOT7","");}
    if ($( "#HP0SLOT8" ).val()!="Empty"){editdata = editdata.replace("HP0SLOT8","\n" + $( "#HP0SLOT8" ).val());}
    else{editdata = editdata.replace("HP0SLOT8","");}
    if ($( "#HP0SLOT9" ).val()!="Empty"){editdata = editdata.replace("HP0SLOT9","\n" + $( "#HP0SLOT9" ).val());}
    else{editdata = editdata.replace("HP0SLOT9","");}
    if ($( "#HP0SLOTX" ).val()!="Empty"){editdata = editdata.replace("HP0SLOTX","\n" + $( "#HP0SLOTX" ).val());}
    else{editdata = editdata.replace("HP0SLOTX","");}
    // Hand Player 1
    if ($( "#HP1SLOT1" ).val()!="Empty"){editdata = editdata.replace("HP1SLOT1","\n" + $( "#HP1SLOT1" ).val());}
    else{editdata = editdata.replace("HP1SLOT1","");}
    if ($( "#HP1SLOT2" ).val()!="Empty"){editdata = editdata.replace("HP1SLOT2","\n" + $( "#HP1SLOT2" ).val());}
    else{editdata = editdata.replace("HP1SLOT2","");}
    if ($( "#HP1SLOT3" ).val()!="Empty"){editdata = editdata.replace("HP1SLOT3","\n" + $( "#HP1SLOT3" ).val());}
    else{editdata = editdata.replace("HP1SLOT3","");}
    if ($( "#HP1SLOT4" ).val()!="Empty"){editdata = editdata.replace("HP1SLOT4","\n" + $( "#HP1SLOT4" ).val());}
    else{editdata = editdata.replace("HP1SLOT4","");}
    if ($( "#HP1SLOT5" ).val()!="Empty"){editdata = editdata.replace("HP1SLOT5","\n" + $( "#HP1SLOT5" ).val());}
    else{editdata = editdata.replace("HP1SLOT5","");}
    if ($( "#HP1SLOT6" ).val()!="Empty"){editdata = editdata.replace("HP1SLOT6","\n" + $( "#HP1SLOT6" ).val());}
    else{editdata = editdata.replace("HP1SLOT6","");}
    if ($( "#HP1SLOT7" ).val()!="Empty"){editdata = editdata.replace("HP1SLOT7","\n" + $( "#HP1SLOT7" ).val());}
    else{editdata = editdata.replace("HP1SLOT7","");}
    if ($( "#HP1SLOT8" ).val()!="Empty"){editdata = editdata.replace("HP1SLOT8","\n" + $( "#HP1SLOT8" ).val());}
    else{editdata = editdata.replace("HP1SLOT8","");}
    if ($( "#HP1SLOT9" ).val()!="Empty"){editdata = editdata.replace("HP1SLOT9","\n" + $( "#HP1SLOT9" ).val());}
    else{editdata = editdata.replace("HP1SLOT9","");}
    if ($( "#HP1SLOTX" ).val()!="Empty"){editdata = editdata.replace("HP1SLOTX","\n" + $( "#HP1SLOTX" ).val());}
    else{editdata = editdata.replace("HP1SLOTX","");}
    // Tower Player 0
    editdata = editdata.replace("T1P0",$( "#T1P0" ).val());
    editdata = editdata.replace("T2P0",$( "#T2P0" ).val());
    editdata = editdata.replace("T3P0",$( "#T3P0" ).val());
    // Tower Player 1
    editdata = editdata.replace("T1P1",$( "#T1P1" ).val());
    editdata = editdata.replace("T2P1",$( "#T2P1" ).val());
    editdata = editdata.replace("T3P1",$( "#T3P1" ).val());
    //Combat Player 0
    editdata = editdata.replace("C1P0SLOT1",$( "#C1P0SLOT1" ).val());
    editdata = editdata.replace("C1P0SLOT2",$( "#C1P0SLOT2" ).val());
    editdata = editdata.replace("C1P0SLOT3",$( "#C1P0SLOT3" ).val());
    editdata = editdata.replace("C1P0SLOT4",$( "#C1P0SLOT4" ).val());
    editdata = editdata.replace("C1P0SLOT5",$( "#C1P0SLOT5" ).val());
    editdata = editdata.replace("C2P0SLOT1",$( "#C2P0SLOT1" ).val());
    editdata = editdata.replace("C2P0SLOT2",$( "#C2P0SLOT2" ).val());
    editdata = editdata.replace("C2P0SLOT3",$( "#C2P0SLOT3" ).val());
    editdata = editdata.replace("C2P0SLOT4",$( "#C2P0SLOT4" ).val());
    editdata = editdata.replace("C2P0SLOT5",$( "#C2P0SLOT5" ).val());
    editdata = editdata.replace("C3P0SLOT1",$( "#C3P0SLOT1" ).val());
    editdata = editdata.replace("C3P0SLOT2",$( "#C3P0SLOT2" ).val());
    editdata = editdata.replace("C3P0SLOT3",$( "#C3P0SLOT3" ).val());
    editdata = editdata.replace("C3P0SLOT4",$( "#C3P0SLOT4" ).val());
    editdata = editdata.replace("C3P0SLOT5",$( "#C3P0SLOT5" ).val());
    //Combat Player 1
    editdata = editdata.replace("C1P1SLOT1",$( "#C1P1SLOT1" ).val());
    editdata = editdata.replace("C1P1SLOT2",$( "#C1P1SLOT2" ).val());
    editdata = editdata.replace("C1P1SLOT3",$( "#C1P1SLOT3" ).val());
    editdata = editdata.replace("C1P1SLOT4",$( "#C1P1SLOT4" ).val());
    editdata = editdata.replace("C1P1SLOT5",$( "#C1P1SLOT5" ).val());
    editdata = editdata.replace("C2P1SLOT1",$( "#C2P1SLOT1" ).val());
    editdata = editdata.replace("C2P1SLOT2",$( "#C2P1SLOT2" ).val());
    editdata = editdata.replace("C2P1SLOT3",$( "#C2P1SLOT3" ).val());
    editdata = editdata.replace("C2P1SLOT4",$( "#C2P1SLOT4" ).val());
    editdata = editdata.replace("C2P1SLOT5",$( "#C2P1SLOT5" ).val());
    editdata = editdata.replace("C3P1SLOT1",$( "#C3P1SLOT1" ).val());
    editdata = editdata.replace("C3P1SLOT2",$( "#C3P1SLOT2" ).val());
    editdata = editdata.replace("C3P1SLOT3",$( "#C3P1SLOT3" ).val());
    editdata = editdata.replace("C3P1SLOT4",$( "#C3P1SLOT4" ).val());
    editdata = editdata.replace("C3P1SLOT5",$( "#C3P1SLOT5" ).val());

    $( "#edit" ).hide();
    document.getElementById("resulthere").value = editdata;
    $( "#result" ).show();
    autosize(document.querySelectorAll('textarea'));
    document.getElementById("resulthere").select();
    document.execCommand('copy');
    alert("Copied Puzzle")
}
function back(){
    $( "#edit" ).show();
    $( "#result" ).hide();
}
function reset(){
    $( ".towers" ).empty();
    $( ".handcards" ).empty();
    $( ".combatcards" ).empty();
    $( ".improvcards" ).empty();
    load();
    $( "#edit" ).show();
    $( "#result" ).hide();
}
function save(){
    var blob = new Blob([document.getElementById("resulthere").value], {
        type: "text/plain;charset=utf-8"
    });
    var filename = puzzlename+".txt";
    saveAs(blob, filename);
}