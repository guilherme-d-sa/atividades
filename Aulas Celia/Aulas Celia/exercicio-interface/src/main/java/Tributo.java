import java.util.ArrayList;
import java.util.List;

public class Tributo {
    //Atributos
    private List<Tributavel> lista;

    //Construtor

    public  Tributo(){
        lista = new ArrayList<Tributavel>();
    }

    //Metodos

    public void  adicionaTributavel(Tributavel t){
        lista.add(t);
    }

    public  void  exibeTodos() {
        System.out.println("\nListar de objetos tributaveis");
        for (Tributavel t: lista){
            System.out.println(t);
        }
    }
    public  Double calculaTotalTributo(){
        Double total = 0.0;
        for (Tributavel t :lista){
            total += t.getValorTributo();
        }
        return total;
    }

}
