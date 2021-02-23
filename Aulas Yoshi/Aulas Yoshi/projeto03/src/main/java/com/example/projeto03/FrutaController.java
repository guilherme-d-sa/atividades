package com.example.projeto03;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/frutas")
public class FrutaController {


        private Fruta fruta = new Fruta("uva",3.5,10,false);

        private List<Fruta> frutas = new ArrayList<>();

    public FrutaController() {
        frutas.add(new Fruta("Morango",11.0,80,true));
        frutas.add(new Fruta("Abacate",6.70,920,true));
        frutas.add(new Fruta("Banana",2.4,37,false));
    }



        @GetMapping("/minha-fruta")
        public Fruta minhafruta(){
            return fruta;
        }

        @GetMapping("/listar")
    public List<Fruta> listar (){
            return frutas;
        }

        /*
        Endpoint /frutas/cadastrar/{nome}/{preco}/{quant}/{semente}/{cal}

        Ao ser invocado, ele cadastra uma nova fruta na API conforme os 4 path params na URI

        Para comprovar que foi cadastrada,invoque novamente o EndPoint de listagem de frutas

         */

    @GetMapping("/cadastrar/{nome}/{preco}/{quant}/{semente}/{cal}")
    public  String cadastrar(@PathVariable String nome,
                             @PathVariable Double preco,
                             @PathVariable Integer quant,
                             @PathVariable Boolean semente,
                             @PathVariable Double cal){
        frutas.add(new Fruta(nome,preco,quant,semente,cal));
        return  "Fruta cadastrada com sucesso";
    }

    /*
    EndPoint /frutas/excluir/{posicao}

    Ao ser invocado, ele exclui uma fruta da lista conforme a {posicao} indicada no path param
    (a partir do 0)
    Retonar "Fruta excluida com sucesso"
    Para comprovar que foi cadastrada invoque novamente o EndPoint
     */

    @GetMapping ("/excluir/{posicao}")
    public String excluir (@PathVariable int posicao ){

        frutas.remove(posicao);

        return "Fruta excluida";

    }
 /*
    EndPoint

    /frutas/atualizar/{posicao}/{nome}/{preco}/{quant}/{semente}/{cal}


 */

   /*
    @GetMapping("/atualizar/{posicao}/{nome}/{preco}/{quant}")
    */


    /*
    EndPoint /frutas/recuperar/{posicao}

    Ao ser invocado, ele tenta recuperar uma fruta na API conforme o path
    param {posicao}, trazendo o JSON da fruta encontrada.
    Caso não encontre, retorne null no método (o que será que aparece no navegador ? )

     */

    @GetMapping("/recuperar/{posicao}")
     public  Fruta recuperar (@PathVariable int posicao){
            if ((frutas.size()-1) >=posicao){
                return frutas.get(posicao);
            }
            else {
                return null;
            }


    }

    /*
    EndPoint /frutas/pesquisar/{nome}
    Ao ser invocado, ele tenta recuperar uma fruta na API conforme o path param {nome}
    trazendo um vetor JSONs das frutas encontradas.
    E pesquisa por parte do nome. Ex: "Uva verde" é encontrada se o termo da pesquisa for "Uva"
    Caso não encontre, retorne null no método
     */


    @GetMapping ("/pesquisar/{nome}")
    public List<Fruta> pesquisar (@PathVariable String nome){
        List<Fruta> filtro = new ArrayList<>();
        for (Fruta fruta:frutas) {
            if (fruta.getNome().contains(nome)){
                filtro.add(fruta);
            }
        }
        return  filtro;
    }
}