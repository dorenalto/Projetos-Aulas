/*
metodo : declarações e estrutura		
autor : Dorenalto M Couto
OBJETO Error
	. message
	. nome
	.toString ()
	
EvalError			Erro usando eval()	
RangerError			Numero extrapola limites
ReferenceErro		Referencia a valor indefinido
SintaxeError		Erro de sintaxe da linguagem
TypeError			Operando diferente do esperado
URIError			Uso errado de funçoes URI

*/
/* refereceError (para funcionar retire /* nesta linha)
try {
	
var x = a; 
var b = x + 10;
alert (b);

} catch(e){
alert(e.toString());
}
*/

/* RangerError
	
var x = prompt ("Informe numero maior que 10"); 
try {
		
		if (x<10){
			throw "numero menor que 10"; 
		}
alert (x);

} catch(e){
alert(e.toString());
}
*/

var Carro = {
				
	Marca: "Nissan",
	Modelo: "350Z",
	Potencia:{
		Cavalos: "350",
		Velocidade:"320Km/h"
	}
};	
with(Carro.Potencia){
alert(Cavalos);
alert(Velocidade);
}
