public class TesteTributo {
    public static void main(String[] args) {
        //Criação dos objetos

        Alimento pernil = new Alimento(123,"1KG de pernil",
                25.0,30);

        Perfume purovoodoo = new Perfume(456,"perfume falso",
                100.0,"floral");

        Servicos entrega = new Servicos("Delivery de comida",
                10.0);

        // Exibir os objetos

        System.out.println(pernil);
        System.out.println(purovoodoo);
        System.out.println(entrega);

        //Criação de objetos tributos

        Tributo trib = new Tributo();

        //Adiciona os objetos tributaveis a lista de trib

        trib.adicionaTributavel(pernil);
        trib.adicionaTributavel(purovoodoo);
        trib.adicionaTributavel(entrega);

        //Exibe todos os objetos da lista
        trib.exibeTodos();

        System.out.println("\nO total de tributos é "+ trib.calculaTotalTributo()) ;

    }
}
