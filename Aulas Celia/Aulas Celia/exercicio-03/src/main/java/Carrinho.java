import java.util.ArrayList;
import java.util.List;

public class Carrinho {

    private List<Vendavel>lista;

    public Carrinho(){
        lista = new ArrayList<Vendavel>();
    }

    public  void adiconarCarrinho (Vendavel v){
        lista.add(v);
    }

    public void  exibeTodos(){
        System.out.println("\nListas de objetos vendaveis");
        for (Vendavel v:lista){
            System.out.println(v);
        }
    }
    public  Double calcularTotalVendavel(){
        Double total = 0.0;
        for (Vendavel v:lista){
            total += v.getValorVenda();
        }
        return total;
    }



}
