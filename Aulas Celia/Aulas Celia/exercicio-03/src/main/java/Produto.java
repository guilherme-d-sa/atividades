public abstract class Produto implements Vendavel {

   private Integer codigo;
   private Double precoCusto;


    public Produto(Integer codigo, Double precoCusto) {
        this.codigo = codigo;
        this.precoCusto = precoCusto;
    }

    @Override
    public String toString() {
        return "Produto{" +
                "codigo=" + codigo +
                ", precoCusto=" + precoCusto +
                '}';
    }


    public Integer getCodigo() {
        return codigo;
    }

    public Double getPrecoCusto() {
        return precoCusto;
    }
}
