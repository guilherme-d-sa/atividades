public class Vendedor extends Funcionario {

    private Double vendas;
    private Double taxas;

    //

    public Vendedor(String cpf, String nome, Double vendas, Double taxas) {
        super(cpf, nome);
        this.vendas = vendas;
        this.taxas = taxas;
    }


    //





    //


    @Override
    public Double calcSalario() {
        return null;
    }

    @Override
    public String toString() {
        return "Vendedor{" +
                "vendas=" + vendas +
                ", taxas=" + taxas +
                "} " + super.toString();
    }
}
