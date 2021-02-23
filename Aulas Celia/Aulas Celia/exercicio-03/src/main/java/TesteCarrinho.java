import java.util.List;

public class TesteCarrinho {
    public static void main(String[] args) {
        Carrinho carrinho = new Carrinho();

        Livro livro1 = new Livro(123,40.0,
                "Dagon","LoveCraft","123ABC");

        Livro livro2 = new Livro(321,45.0,
                "Call of Ctchullu","LoveCraft","321CBA");

        DVD dvd1 = new DVD(456,20.0,"Trilha Sonora 2","Desconhecido");

        DVD dvd2 = new DVD(789,25.0,"Playlistlegal","Guilherme");

        Servicos servico1 = new Servicos("Servente de pedreiro",
                123,9,20.0);

        carrinho.adiconarCarrinho(livro2);
        carrinho.adiconarCarrinho(dvd1);
        carrinho.adiconarCarrinho(servico1);

        carrinho.exibeTodos();

        System.out.println("\n Total da venda é " + carrinho.calcularTotalVendavel() );








    }
}
