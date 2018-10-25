/**
*Apresentar os conceitos de Entrada.
*@author Dorenalto Mangueira Couto

*/
import java.util.Scanner;
public class Entrada {
	public static void main (String[] args){
		
		//System.out.println (args[0]);// chamada do programa.
		
		// Interagindo com o Usuário
		Scanner s  = new Scanner (System.in);
		System.out.println("Qual é seu nome");
		String nome = s.nextLine();
		System.out.println("Bem vindo " + nome);
		
	}
}