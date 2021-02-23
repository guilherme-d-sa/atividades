public class AlunoGraduacao extends Aluno {

    Double nota1;
    Double nota2;

    public AlunoGraduacao(Integer ra, String nome, Double nota1, Double nota2) {
        super(ra, nome);
        this.nota1 = nota1;
        this.nota2 = nota2;
    }

    public Double calcularMedia() {
        return ((nota1*0.4)+(nota2*0.6));
    }

    @Override
    public String toString() {
        return "AlunoGraduacao{" +
                "nota1=" + nota1 +
                ", nota2=" + nota2 +
                ", Média=" +calcularMedia()+
                "} " + super.toString();
    }
}
