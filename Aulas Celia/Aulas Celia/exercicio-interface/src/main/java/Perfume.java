public class Perfume extends Produto{

    //Atributos
    private  String fragrancia;

    //Construtor

    public Perfume(Integer codigo, String descricao, Double preco, String fragrancia) {
        super(codigo, descricao, preco);
        this.fragrancia = fragrancia;
    }


    //Metodos

    //Implementação do getValorTributo


    @Override
    public Double getValorTributo() {
        return getPreco() * 0.27;
    }

    //Metodo toString


    @Override
    public String toString() {
        return "Perfume{" +
                "fragrancia='" + fragrancia + '\'' +
                ", tributo=" +getValorTributo() +
                "} " + super.toString();
    }
}
