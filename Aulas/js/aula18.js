/*
		autor:Dorenalto Mangueira Couto
	descrição: RegExp - Expressões Refulares


*/

/*var regex = /javascript/i;
var string = "JavaScript";

alert (regex.test (string));
*/
/* FUNÇÕES + MODIFICADORES */
// var str =  "Qual é o Doce mais doce que o doce";
// alert (/doce/ig.exec(str));
// alert (str.match (/doce/ig));

/* METACARACTERES */
 //alert(/\d\d\d$.test("Pier21"));
 //alert(/^\d\d\d\d\d\-\d\d\d$/.test("70294-070"));
 
 /* QUANTIFICADORES*/
 //alert (/\d{2}$/.test("Pier21"));
 //alert(/^\d{5}-\d{3}$/.test("70294-070"));
 //alert(/^\d{2}\/\d{2}\/\d{4}$/.test("24/09/1988"));
 
 /* BUSCAS E SUBSTITUIÇÕES  */
 // var str = "Qual é o Doce mais doce do que o doCe?";
 //alert(str.match(/doce/ig));
 //alert(str.replace(/doce/ig, "XXX"));
  
  var url ="www.xti.com/clientes-2011.html";
  // "http://www.xti.com.br/cliente-2011/clientes.jsp";
  var re = /www.xti.com.br\/\w{2,} - \d{4}\.html/;
  alert(re.test(url));
  //re = /www.xti.com.br\/(\w{2,})-(\d{4}))\.html/;
  //alert(url.replace(re, "http://$1/$3/$2.jsp"));
 