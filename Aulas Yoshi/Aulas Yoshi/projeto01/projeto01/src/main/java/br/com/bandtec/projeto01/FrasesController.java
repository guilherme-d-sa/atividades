package br.com.bandtec.projeto01;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/*
@RestController -> Esta ANOTAÇÃO transformou a classe em uma Rest Controller
 */
@RestController
public class FrasesController {

    @GetMapping

    public String padrao(){
        return "Esse ano eu pego mestre";
    }
/*
O valor entre as aspas dentro dos parenteses é a URI do EndPoint (chamada).
A URI aqui é "/bom-dia".
ou seja, a Url para este EndPoint é http://localhost:8080/bom-dia
 */
    @GetMapping("/bom-dia")

    public String bomDia(){
        return "Bom dia,galera";
    }

    @GetMapping("/boa-tarde")

    public String boaTarde(){
        return "Boa tarde, preguiça da tarde";
    }
}
