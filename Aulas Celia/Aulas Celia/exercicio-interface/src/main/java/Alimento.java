public class Alimento extends Produto {

    //Atributo
    private  Integer quantVitamina;


    //Construtor

    public Alimento(Integer codigo, String descricao, Double preco, Integer quantVitamina) {
        super(codigo, descricao, preco);
        this.quantVitamina = quantVitamina;
    }


    //Metodos

    //Implementação de método abstrado getValorTributo


    @Override
    public Double getValorTributo() {
        return getPreco() * 0.15;
    }

    // Método toString


    @Override
    public String toString() {
        return "Alimento{" +
                "quantVitamina=" + quantVitamina +
                ", tributo=" +getValorTributo() +
                "} " + super.toString();
    }
}
