/*
	cliente: Cine-Baladinha
	autor:Dorenalto Mangueira Couto
	descrição: Script para localização de Poltronas Disponiveis.


*/

//true = disponivel
// false = ocupada

window.onload = function() {
	carregarPoltronas();
	
}

var poltronas = [false, true, false, true,  true, true, false, true, false];

function carregarPoltronas() { 
	var imagens = document.getElementsByTagName("img");
	for (var i=0; i<imagens.length; i++){ 
			if (poltronas[i]) {
				imagens[i].src = "../img/poltronaA.jpg";
			
	} else { 
			imagens[i].src = "../img/poltronaV.jpg";
	}
  }
}
function selecionarPoltrona(){
	var imagens = document.getElementsByTagName("img");
	for (var i=0; i<poltronas.length; i++){ 
			if (poltronas[i]) {
				
				imagens[i].src = "../img/poltronaVerde.jpg";
				
				var quer = confirm("Voce quer essa  poltrona?");
				if (quer){
				break;
			}else {imagens[i].src = "../img/poltronaA.jpg";
			
			}
			}
	}
}

			
function selecionarCasal() {
	var imagens = document.getElementsByTagName("img");
	for (var i=0; i<poltronas.length; i++){ 
			if (poltronas[i] && poltronas [i+1]) {
				imagens[i].src = "../img/poltronaVerde.jpg";
				imagens[i+1].src = "../img/poltronaVerde.jpg";
				
				var quer = confirm("Voce quer essas  poltrona?");
				if (quer){
				break;
			}else {imagens[i].src = "../img/poltronaA.jpg";
			imagens[i+1].src = "../img/poltronaA.jpg";
			}
		}
	}
}