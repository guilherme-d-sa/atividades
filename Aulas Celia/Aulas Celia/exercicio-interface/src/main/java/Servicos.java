public class Servicos implements  Tributavel{

    //Atributos

    private String descricao;
    private Double preco;


    //Construtor

    public Servicos(String descricao, Double preco) {
        this.descricao = descricao;
        this.preco = preco;
    }


    //Metodos

    @Override
    public Double getValorTributo() {
        return preco * 0.12;
    }


    //Metodo toString


    @Override
    public String toString() {
        return "Servicos{" +
                "descricao='" + descricao + '\'' +
                ", preco=" + preco +
                ", tributo =" +getValorTributo() +
                '}';
    }



}
