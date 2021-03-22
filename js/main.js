var puzzlename="Puzzle";
var itemslist;
var editdata = emptypuzzle;
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
    itemslist = itemcards.split(/\n/gi) ; //Equipable item cards
    itemslist.forEach(element => {
        var option = document.createElement("option");
        option.innerText = element;
        $( ".itemcards" ).append(option);
    });
}
function process(){
    editdata = editdata.replace("NAMEHERE",$( "#NAMEHERE" ).val());
    puzzlename=$( "#NAMEHERE" ).val();
    editdata = editdata.replace("TWRHEALTH",$( "#TWRHEALTH" ).val());
    editdata = editdata.replace("ACNTHEALTH",$( "#ACNTHEALTH" ).val());
    if (document.getElementById("SHOPEXISTS").checked == true){editdata = editdata.replace("SHOPEXISTS", "0");}
    else{editdata = editdata.replace("SHOPEXISTS","1");}
    //Mana and Gold
    editdata = editdata.replace("P0MANA",$( "#P0MANA" ).val());
    editdata = editdata.replace("P0GOLD",$( "#P0GOLD" ).val());
    editdata = editdata.replace("P1MANA",$( "#P1MANA" ).val());
    editdata = editdata.replace("P1GOLD",$( "#P1GOLD" ).val());
    //Improvements Player 0
    if ($( "#I1P0SLOT1" ).val()!="Empty"){editdata = editdata.replace("I1P0SLOT1","\n" + $( "#I1P0SLOT1" ).val());}
    else{editdata = editdata.replace("I1P0SLOT1","");}
    if ($( "#I1P0SLOT2" ).val()!="Empty"){editdata = editdata.replace("I1P0SLOT2","\n" + $( "#I1P0SLOT2" ).val());}
    else{editdata = editdata.replace("I1P0SLOT2","");}
    if ($( "#I1P0SLOT3" ).val()!="Empty"){editdata = editdata.replace("I1P0SLOT3","\n" + $( "#I1P0SLOT3" ).val());}
    else{editdata = editdata.replace("I1P0SLOT3","");}
    if ($( "#I1P0SLOT4" ).val()!="Empty"){editdata = editdata.replace("I1P0SLOT4","\n" + $( "#I1P0SLOT4" ).val());}
    else{editdata = editdata.replace("I1P0SLOT4","");}
    if ($( "#I1P0SLOT5" ).val()!="Empty"){editdata = editdata.replace("I1P0SLOT5","\n" + $( "#I1P0SLOT5" ).val());}
    else{editdata = editdata.replace("I1P0SLOT5","");}
    if ($( "#I2P0SLOT1" ).val()!="Empty"){editdata = editdata.replace("I2P0SLOT1","\n" + $( "#I2P0SLOT1" ).val());}
    else{editdata = editdata.replace("I2P0SLOT1","");}
    if ($( "#I2P0SLOT2" ).val()!="Empty"){editdata = editdata.replace("I2P0SLOT2","\n" + $( "#I2P0SLOT2" ).val());}
    else{editdata = editdata.replace("I2P0SLOT2","");}
    if ($( "#I2P0SLOT3" ).val()!="Empty"){editdata = editdata.replace("I2P0SLOT3","\n" + $( "#I2P0SLOT3" ).val());}
    else{editdata = editdata.replace("I2P0SLOT3","");}
    if ($( "#I2P0SLOT4" ).val()!="Empty"){editdata = editdata.replace("I2P0SLOT4","\n" + $( "#I2P0SLOT4" ).val());}
    else{editdata = editdata.replace("I2P0SLOT4","");}
    if ($( "#I2P0SLOT5" ).val()!="Empty"){editdata = editdata.replace("I2P0SLOT5","\n" + $( "#I2P0SLOT5" ).val());}
    else{editdata = editdata.replace("I2P0SLOT5","");}
    if ($( "#I3P0SLOT1" ).val()!="Empty"){editdata = editdata.replace("I3P0SLOT1","\n" + $( "#I3P0SLOT1" ).val());}
    else{editdata = editdata.replace("I3P0SLOT1","");}
    if ($( "#I3P0SLOT2" ).val()!="Empty"){editdata = editdata.replace("I3P0SLOT2","\n" + $( "#I3P0SLOT2" ).val());}
    else{editdata = editdata.replace("I3P0SLOT2","");}
    if ($( "#I3P0SLOT3" ).val()!="Empty"){editdata = editdata.replace("I3P0SLOT3","\n" + $( "#I3P0SLOT3" ).val());}
    else{editdata = editdata.replace("I3P0SLOT3","");}
    if ($( "#I3P0SLOT4" ).val()!="Empty"){editdata = editdata.replace("I3P0SLOT4","\n" + $( "#I3P0SLOT4" ).val());}
    else{editdata = editdata.replace("I3P0SLOT4","");}
    if ($( "#I3P0SLOT5" ).val()!="Empty"){editdata = editdata.replace("I3P0SLOT5","\n" + $( "#I3P0SLOT5" ).val());}
    else{editdata = editdata.replace("I3P0SLOT5","");}
    //Improvements Player 1
    if ($( "#I1P1SLOT1" ).val()!="Empty"){editdata = editdata.replace("I1P1SLOT1","\n" + $( "#I1P1SLOT1" ).val());}
    else{editdata = editdata.replace("I1P1SLOT1","");}
    if ($( "#I1P1SLOT2" ).val()!="Empty"){editdata = editdata.replace("I1P1SLOT2","\n" + $( "#I1P1SLOT2" ).val());}
    else{editdata = editdata.replace("I1P1SLOT2","");}
    if ($( "#I1P1SLOT3" ).val()!="Empty"){editdata = editdata.replace("I1P1SLOT3","\n" + $( "#I1P1SLOT3" ).val());}
    else{editdata = editdata.replace("I1P1SLOT3","");}
    if ($( "#I1P1SLOT4" ).val()!="Empty"){editdata = editdata.replace("I1P1SLOT4","\n" + $( "#I1P1SLOT4" ).val());}
    else{editdata = editdata.replace("I1P1SLOT4","");}
    if ($( "#I1P1SLOT5" ).val()!="Empty"){editdata = editdata.replace("I1P1SLOT5","\n" + $( "#I1P1SLOT5" ).val());}
    else{editdata = editdata.replace("I1P1SLOT5","");}
    if ($( "#I2P1SLOT1" ).val()!="Empty"){editdata = editdata.replace("I2P1SLOT1","\n" + $( "#I2P1SLOT1" ).val());}
    else{editdata = editdata.replace("I2P1SLOT1","");}
    if ($( "#I2P1SLOT2" ).val()!="Empty"){editdata = editdata.replace("I2P1SLOT2","\n" + $( "#I2P1SLOT2" ).val());}
    else{editdata = editdata.replace("I2P1SLOT2","");}
    if ($( "#I2P1SLOT3" ).val()!="Empty"){editdata = editdata.replace("I2P1SLOT3","\n" + $( "#I2P1SLOT3" ).val());}
    else{editdata = editdata.replace("I2P1SLOT3","");}
    if ($( "#I2P1SLOT4" ).val()!="Empty"){editdata = editdata.replace("I2P1SLOT4","\n" + $( "#I2P1SLOT4" ).val());}
    else{editdata = editdata.replace("I2P1SLOT4","");}
    if ($( "#I2P1SLOT5" ).val()!="Empty"){editdata = editdata.replace("I2P1SLOT5","\n" + $( "#I2P1SLOT5" ).val());}
    else{editdata = editdata.replace("I2P1SLOT5","");}
    if ($( "#I3P1SLOT1" ).val()!="Empty"){editdata = editdata.replace("I3P1SLOT1","\n" + $( "#I3P1SLOT1" ).val());}
    else{editdata = editdata.replace("I3P1SLOT1","");}
    if ($( "#I3P1SLOT2" ).val()!="Empty"){editdata = editdata.replace("I3P1SLOT2","\n" + $( "#I3P1SLOT2" ).val());}
    else{editdata = editdata.replace("I3P1SLOT2","");}
    if ($( "#I3P1SLOT3" ).val()!="Empty"){editdata = editdata.replace("I3P1SLOT3","\n" + $( "#I3P1SLOT3" ).val());}
    else{editdata = editdata.replace("I3P1SLOT3","");}
    if ($( "#I3P1SLOT4" ).val()!="Empty"){editdata = editdata.replace("I3P1SLOT4","\n" + $( "#I3P1SLOT4" ).val());}
    else{editdata = editdata.replace("I3P1SLOT4","");}
    if ($( "#I3P1SLOT5" ).val()!="Empty"){editdata = editdata.replace("I3P1SLOT5","\n" + $( "#I3P1SLOT5" ).val());}
    else{editdata = editdata.replace("I3P1SLOT5","");}
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
    editdata = editdata.replace("T1P0",$( "#T1P0" ).val()+" [Damage="+ $( "#T1P0DMG" ).val()+"]");
    editdata = editdata.replace("T2P0",$( "#T2P0" ).val()+" [Damage="+ $( "#T2P0DMG" ).val()+"]");
    editdata = editdata.replace("T3P0",$( "#T3P0" ).val()+" [Damage="+ $( "#T3P0DMG" ).val()+"]");
    // Tower Player 1
    editdata = editdata.replace("T1P1",$( "#T1P1" ).val()+" [Damage="+ $( "#T1P1DMG" ).val()+"]");
    editdata = editdata.replace("T2P1",$( "#T2P1" ).val()+" [Damage="+ $( "#T2P1DMG" ).val()+"]");
    editdata = editdata.replace("T3P1",$( "#T3P1" ).val()+" [Damage="+ $( "#T3P1DMG" ).val()+"]");
    //Combat Player 0
    combatapply("C1P0SLOT1");
    combatapply("C1P0SLOT2");
    combatapply("C1P0SLOT3");
    combatapply("C1P0SLOT4");
    combatapply("C1P0SLOT5");
    combatapply("C2P0SLOT1");
    combatapply("C2P0SLOT2");
    combatapply("C2P0SLOT3");
    combatapply("C2P0SLOT4");
    combatapply("C2P0SLOT5");
    combatapply("C3P0SLOT1");
    combatapply("C3P0SLOT2");
    combatapply("C3P0SLOT3");
    combatapply("C3P0SLOT4");
    combatapply("C3P0SLOT5");
    //Combat Player 1
    combatapply("C1P1SLOT1");
    combatapply("C1P1SLOT2");
    combatapply("C1P1SLOT3");
    combatapply("C1P1SLOT4");
    combatapply("C1P1SLOT5");
    combatapply("C2P1SLOT1");
    combatapply("C2P1SLOT2");
    combatapply("C2P1SLOT3");
    combatapply("C2P1SLOT4");
    combatapply("C2P1SLOT5");
    combatapply("C3P1SLOT1");
    combatapply("C3P1SLOT2");
    combatapply("C3P1SLOT3");
    combatapply("C3P1SLOT4");
    combatapply("C3P1SLOT5");
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
    document.getElementById("SHOPEXISTS").checked = false
    document.getElementById("TWRHEALTH").value="40";
    document.getElementById("ACNTHEALTH").value="40";
    $('.TDMG').val('0');
    $('.CDMG').val('0');
    $('select[id^="newones"]').each(function () {
        this.remove()
    });
    $( ".itemcards" ).empty();  
    $('.combatcards').parent().children("button").hide();  
    $('input[type="checkbox"]').prop( "checked", false );
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
function additem(from) { 
    //I know that I could have made a select from start but this way is hell of a lot more easier
    var selectastxt= "<select id=\"newones\" class=\"itemcards\"><option>Empty</option><option>Short Sword</option><option>Force Staff</option><option>Healing Blade</option><option>Blade of the Vigil</option><option>Demagicking Maul</option><option>Demolishing Warhammer</option><option>Hooked Net</option><option>Mazer Beam MK-179</option><option>Broadsword</option><option>Orchid</option><option>Red Mist Maul</option><option>Blink Dagger</option><option>Jasper Daggers</option><option>Claymore</option><option>Mortred's Dagger</option><option>Sorla Khan's Spear</option><option>Sheep Stick</option><option>Wingfall Hammer</option><option>Mjollnir</option><option>Silver Edge</option><option>Apotheosis Blade</option><option>Radiance</option><option>Leather Armor</option><option>Barbed Mail</option><option>Bracers of Sacrifice</option><option>Midas Greaves</option><option>Ring of Basilius</option><option>Crown of the Undying</option><option>Type XLII Kineto-Zap Harmor</option><option>Artificer's Mail</option><option>Main Gauche</option><option>Ristul Emblem</option><option>Noxious Talisman</option><option>Seraphim Shield</option><option>Helm of the Dominator</option><option>Nullifier</option><option>Shield of St. Crella</option><option>Vladmir's Offering</option><option>Vesture of the Tyrant</option><option>Nyctasha's Guard</option><option>Darkblight Shield</option><option>Traveler's Cloak</option><option>Stonehall Cloak</option><option>Claszureme Hourglass</option><option>Necronomicon</option><option>Phase Boots</option><option>Ring of Tarrasque</option><option>Sproink Springers Mk.23</option><option>Infernal Amulet</option><option>Warhorn</option><option>Gem of True Sight</option><option>Ghost Scepter</option><option>Hero's Cape</option><option>Holy Locket</option><option>Horn of the Alpha</option><option>Spirit Vessel</option><option>Dagon</option><option>Refresher Orb</option></select>"
    $("#"+from).append(selectastxt);
 }
 function combatapply(mainid){
    var main = $( "#"+mainid )
    if (main.val()!="Empty"){ 
        var replaced= main.val()
        var damandsilen="" 
        if (main.parent().children(".CDMG").val()!="0"){
            damandsilen = damandsilen +" [Damage="+ main.parent().children(".CDMG").val() +""
        }
        if (main.parent().children('input[type="checkbox"]').is(':checked')){
            if (damandsilen!=""){
                damandsilen= damandsilen + ",Silenced";
            }
            else{
                damandsilen = damandsilen+" [Silenced"
            }
        }
        if (damandsilen!=""){damandsilen = damandsilen+"]"}
        replaced= replaced +damandsilen;
        $("#"+ main.attr("id")+"ITM").children('select').each(function () { 
            if (this.value!="Empty"){replaced= replaced + " Equip(" +this.value+")"}
        });
        editdata = editdata.replace(mainid,replaced);
    }
    else{
        editdata = editdata.replace(mainid,main.val());
    }
 }
$(document).ready(function(){
    $('.combatcards').change(function () {
        if ($(this).val()=="Mazzie"){
            //alert("yo")
            $(this).parent().children("button").show();
        }
        else{
            $(this).parent().children("button").hide();
            $('select[id^="newones"]').each(function () {
                this.remove()
            });      
            
        }
   })
   })
   