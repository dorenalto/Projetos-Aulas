/**
*Apresentar os conceitos de Entrada.
*@author Dorenalto Mangueira Couto

*/
import javax.swing.JOptionPane;

public class Entrada1 {
	public static void main (String[] args){
		
		// Interagindo com o Usuário
		
		String nome = JOptionPane.showInputDialog ("Qual é seu nome?");
		JOptionPane.showMessageDialog(null,"Bem vindo " + nome);
				System.out.println("Bem vindo " + nome);
		
	}
}