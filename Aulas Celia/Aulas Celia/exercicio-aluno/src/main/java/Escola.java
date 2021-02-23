import java.util.ArrayList;
import java.util.List;

public class Escola {

    private String nome;
    private List<Aluno> lista;

    public Escola(String nome) {
        this.nome = nome;
        this.lista = lista;
        lista = new ArrayList<Aluno>();
    }




    public void adicionarAluno(Aluno a){
        lista.add(a);
    }

    public void exibirTodos(){
        System.out.println("Lista dos Alunos");
        for (Aluno a: lista){
            System.out.println(a);
        }
    }

    public void exibeAlunosGraduacao(){
        System.out.println("Lista dos Alunos de Graduação");
        for (Aluno a: lista){
            if (a instanceof AlunoGraduacao) {
                System.out.println(a);
            }
        }
    }

    public void exibaAlunoAprovado(){
        System.out.println("Lista dos Alunos Aprovados");
        for (Aluno a: lista){
            if (a.calcularMedia() >= 6) {
                System.out.println(a);
            }
        }
    }

    public void buscaAluno(Integer ra){
        System.out.println("Buscando ...");
        for (Aluno a: lista){
            if (ra == a.getRa()) {
                System.out.println(a);
            }
        }

    }
}
