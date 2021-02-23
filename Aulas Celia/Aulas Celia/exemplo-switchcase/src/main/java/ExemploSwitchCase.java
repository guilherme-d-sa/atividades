import java.lang.invoke.SwitchPoint;
import java.util.Scanner;

public class ExemploSwitchCase {
    public static void main(String[] args) {

        Scanner leitor = new Scanner(System.in);

        Integer diasDaSemana;

        System.out.println("Digite o dia da semana");

        diasDaSemana = leitor.nextInt();


        if (diasDaSemana == 1){
            System.out.println("Domingo");
        }
        else if (diasDaSemana == 2){
            System.out.println("Segunda Feira");
        }
        else if (diasDaSemana == 3){
            System.out.println("Terça Feira");
        }
        //Implementando a mesma lógica, usando switch case

        switch (diasDaSemana){
            case 1: //diaDaSemana é 1
                System.out.println("Domingo");
                break;


            case 2:
                System.out.println("Segunda");
                break;


            case 3:
                System.out.println("Terça");
                break;


            case 4:
                System.out.println("Quarta");
                break;


            case 5:
                System.out.println("Quinta");
                break;


            case 6:
                System.out.println("Sexta");
                break;


            case 7:
                System.out.println("Sabado");
                break;

            default://diaDaSemana não é nenhum dos valores acime de 1 a 7
                System.out.println("Dia da semana invalido");
                break;
        }

    }





}
