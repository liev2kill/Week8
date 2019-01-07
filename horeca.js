var totalbier    = 0;
var totalwijn    = 0;
var totalfris    = 0;
var balschalen8  = 0;
var balschalen16 = 0;

const bierprijs  = 1.99
const wijnprijs  = 1.99
const frisprijs  = 1.00
const bal8prijs  = 3.00
const bal16prijs = 4.99





function order() {
	while ((order = prompt('Welke bestelling wilt u toevoegen?\nfris, bier, wijn of snacks')) !== 'stop'){ 
		if (order === 'fris'){    
			var insert = parseInt(prompt('Hoeveel ' + order + ' wilt u?')); 
			totalfris += insert;		
		}
		else if ((order === 'bier')){
			var insert = parseInt(prompt('Hoeveel ' + order + ' wilt u?'));
			totalbier += insert;				
		}
		else if ((order === 'wijn')){
			var insert = parseInt(prompt('Hoeveel ' + order + ' wilt u?'));
			totalwijn += insert;
		}
		else if (order == 'snacks'){	
			if ((bitterballen = prompt('Hoeveel bitterballen wilt u?\nKies uit 8 of 16.')) == 8){
				var insert = parseInt(prompt('Hoeveel schalen van ' + bitterballen + ' bitterballen wilt u bestellen?'))
				balschalen8 += insert
			}
			else if (bitterballen == 16){
				var insert = parseInt(prompt('Hoeveel schalen van ' + bitterballen + ' bitterballen wilt u bestellen?'))
				balschalen16 += insert
			}
			else {
				alert('Je kan alleen 8 of 16 invoeren!\nDe snacks waren niet toegevoegd aan de bestelling.')
			}
		}
		else {
			alert('Je kan alleen uit fris, bier, wijn en snacks kiezen.')
		}	
	}
	prices();
}

 
var biertotalprice;
var snack;	
var fristotalprice;
var wijntotalprice;
var ball8total;
var ball16total;
var totalprice = 0;	




function prices(){
	if (totalbier > 0){
		biertotalprice = bierprijs * totalbier
		totalprice += biertotalprice;
	}
	if (totalfris > 0){
		fristotalprice = frisprijs * totalfris
		totalprice += fristotalprice;
	}
	if (totalwijn > 0){
		wijntotalprice = wijnprijs * totalwijn
		totalprice += wijntotalprice;
	}
	if (balschalen8 > 0){	
		ball8total = balschalen8 * bal8prijs
		totalprice += ball8total;
	}
	if (balschalen16 > 0){
		ball16total = balschalen16 * bal16prijs
		totalprice += ball16total;
	}
	bonnetje();
}




function bonnetje(){

  document.writeln('<h1>Drankjes</h1> <br />')

	if (totalbier > 0){
		document.writeln('Aantal bier: ' + totalbier + '<br />')		
		document.writeln('Prijs per stuk: &#8364;' + bierprijs + '<br />');
		document.writeln('Totaal prijs: &#8364;' + biertotalprice.toFixed(2) + '<br /><br />');
	}
	if (totalfris > 0){
		document.writeln('Aantal fris: ' + totalfris + '<br />')		
		document.writeln('Prijs per stuk: &#8364;' + frisprijs + '<br />');
		document.writeln('Totaal prijs: &#8364;' + fristotalprice.toFixed(2) + '<br /><br />');
	}
	if (totalwijn > 0){
		document.writeln('Aantal wijn: ' + totalwijn + '<br />')		
		document.writeln('Prijs per stuk: &#8364;' + wijnprijs + '<br />');
		document.writeln('Totaal prijs: &#8364;' + wijntotalprice.toFixed(2) + '<br /><br />');
	}
   	if (balschalen8,balschalen16 > 0){
   		document.writeln('<h1>Snacks</h1> <br />')
   	}
	if (balschalen8 > 0){
		document.writeln('Aantal bitterballen: ' + balschalen8 + ' schalen van 8 bitterballen <br />')		
		document.writeln('Prijs per schaal: &#8364;' + bal8prijs + '<br />');
		document.writeln('Totaal prijs: &#8364;' + ball8total.toFixed(2) + '<br /><br />');
	}
	if (balschalen16 > 0){
		document.writeln('Aantal bitterballen: ' + balschalen16 + ' schalen van 16 bitterballen <br />')		
		document.writeln('Prijs per schaal: &#8364;' + bal16prijs + '<br />');
		document.writeln('Totaal prijs: &#8364;' + ball16total.toFixed(2) + '<br /><br />');
	}
	
  document.writeln('<br />Totaal: &#8364;' + totalprice.toFixed(2));	
}
order();
