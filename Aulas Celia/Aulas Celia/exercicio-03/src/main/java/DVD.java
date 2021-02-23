public class DVD  extends Produto{
    private String nome;
    private String autor;

    public DVD(Integer codigo, Double precoCusto, String nome, String autor) {
        super(codigo, precoCusto);
        this.nome = nome;
        this.autor = autor;
    }

    @Override
    public Double getValorVenda() {
        return getValorVenda() * 0.20;
    }

    @Override
    public String toString() {
        return "DVD{" +
                "nome='" + nome + '\'' +
                ", autor='" + autor + '\'' +
                ",Valor da Venda="+ getValorVenda() +
                "} " + super.toString();
    }
}
