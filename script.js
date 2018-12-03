const FRIS = 2.20;    //bij deze const geef ik aan wat de prijs is.
const BIER = 2.50;
const WIJN = 4;
const SNACK = 5;

var fris = 0;    
var bier = 0;
var wijn = 0;
var snack = 0;

var input;




while (input != ("stop")){


    input = prompt("wat wilt u bestellen?");
    if (input == "fris") {
        var newFris = parseInt(prompt("hoeveel fris wilt u bestellen?"));
        fris = fris + newFris;
        console.log(fris , "x" , FRIS);
    }
    else if (input == "wijn"){
        var newWijn = parseInt(prompt("hoeveel wijn wilt u bestellen?"));
        wijn = wijn + newWijn;
        console.log(wijn , "x" , WIJN);
    }
    else if (input == "bier"){
        var newBier = parseInt(prompt("hoeveel bier wilt u bestellen?"));
        bier = bier + newBier;
        console.log(bier , "x" , BIER);
    }
    else if (input == "snack"){
        var newSnack = parseInt(prompt("hoeveel bitterballen wilt u 8 of 16?"));
        snack = snack + newSnack;
        console.log(snack , "x" , SNACK);
    }    

}

var frisprice = fris*FRIS;
var bierprice = bier*BIER; 
var wijnprice = wijn*WIJN;
var totalprice = frisprice+bierprice+wijnprice;
document.write ("Aantal fris="+newFris)
document.write ('<br>')
document.write ("Fris prijs totaal:"+frisprice)
document.write ('<br>')
document.write("Aantal bier="+newBier)
document.write ('<br>')
document.write ("Bier prijs totaal:"+bierprice)
document.write ('<br>')
document.write("Aantal wijn="+newWijn)
document.write ('<br>')
document.write ("Wijn prijs totaal:"+wijnprice)
document.write ('<br>')
document.write ("Totaal prijs:"+totalprice)



