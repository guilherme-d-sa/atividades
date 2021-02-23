public class Livro extends Produto {

    private String nome;
    private String autor;
    private String isbn;

    public Livro(Integer codigo, Double precoCusto, String nome, String autor, String isbn) {
        super(codigo, precoCusto);
        this.nome = nome;
        this.autor = autor;
        this.isbn = isbn;
    }

    @Override
    public Double getValorVenda() {
        return getValorVenda() * 0.10;
    }

    @Override
    public String toString() {
        return "Livro{" +
                "nome='" + nome + '\'' +
                ", autor='" + autor + '\'' +
                ", isbn='" + isbn + '\'' +
                ",Vendavel=" + getValorVenda() +
                "} " + super.toString();
    }
}
