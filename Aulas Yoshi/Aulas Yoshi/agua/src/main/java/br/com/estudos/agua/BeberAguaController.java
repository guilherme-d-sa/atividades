package br.com.estudos.agua;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BeberAguaController {

    private Integer acessos = 0;
    Double litro = 0.0;

    @RequestMapping("/beber-agua/{litros}")
    public Double beberAgua(@PathVariable Double litros){
        acessos++;
        if(litros>0){
            litro += litros;
        }

        return litro;
    }

    @GetMapping("/beber-agua/consultar")
    public String consultando(){
        return "Você já bebeu água " + acessos + " vezes, totalizando " + litro + " litros";
    }

    public Integer getAcessos() {
        return acessos;
    }

    public Double getLitro() {
        return litro;
    }
}
