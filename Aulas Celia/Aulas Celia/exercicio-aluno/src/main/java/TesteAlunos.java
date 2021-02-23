public class TesteAlunos {

    public static void main(String[] args) {

        AlunoFundamental alunoFund = new AlunoFundamental(011,"Robson", 10.0, 8.0, 10.0, 8.0);
        AlunoGraduacao alunoGrad = new AlunoGraduacao(021, "Maria", 8.0, 9.0);
        AlunoPos alunoPos= new AlunoPos(031, "Junin", 3.0, 3.0, 5.0);

        Escola escolaOne = new Escola("INAH");

        escolaOne .adicionarAluno(alunoFund);
        escolaOne .adicionarAluno(alunoGrad);
        escolaOne .adicionarAluno(alunoPos);

        escolaOne .exibirTodos();

        escolaOne .exibeAlunosGraduacao();
        escolaOne .exibaAlunoAprovado();
        escolaOne .buscaAluno(021);

    }
}
