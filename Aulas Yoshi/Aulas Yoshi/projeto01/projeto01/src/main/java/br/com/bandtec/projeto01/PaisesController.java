package br.com.bandtec.projeto01;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/paises")
public class PaisesController {

    @GetMapping("/canada")
    public String canada(){
        return "Pedimos desculpa por qualquer coisa";
    }
    @GetMapping("/franca")
    public String franca(){
        return "Nossa culinaria é a mais cara do mundo";
    }

    @GetMapping("/cuba")
    public String cuba(){
        return  "Nossos charutos são os melhores";
    }
}
