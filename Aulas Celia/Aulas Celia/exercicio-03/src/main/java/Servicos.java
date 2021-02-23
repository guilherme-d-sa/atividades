public class Servicos implements  Vendavel{

    private  String descricao;
    private  Integer codigo;
    private  Integer quantHoras;
    private  Double valorHora;

    public Servicos(String descricao, Integer codigo, Integer quantHoras, Double valorHora) {
        this.descricao = descricao;
        this.codigo = codigo;
        this.quantHoras = quantHoras;
        this.valorHora = valorHora;
    }

    @Override
    public Double getValorVenda() {
        return quantHoras * valorHora;
    }

    @Override
    public String toString() {
        return "Servicos{" +
                "descricao='" + descricao + '\'' +
                ", codigo=" + codigo +
                ", quantHoras=" + quantHoras +
                ", valorHora=" + valorHora +
                ", Valor do Serviço=" + getValorVenda() +
                '}';
    }
}
