public class Engenheiro extends Funcionario {

    //Atributo
    private Double salario;


    //Contrutor

    public Engenheiro(String cpf, String nome, Double salario) {
        super(cpf, nome);
        this.salario = salario;
    }


    //Metodos

    //Implementação do metodo abstrato calcSalario()


    @Override
    public Double calcSalario() {
        return salario;
    }

    //Metodo toString()

    @Override
    public String toString() {
        return "Engenheiro{" +
                "salario=" + salario +
                "} " + super.toString();
    }
}
