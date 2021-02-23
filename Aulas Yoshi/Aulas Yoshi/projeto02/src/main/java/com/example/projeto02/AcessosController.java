package com.example.projeto02;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AcessosController {

 private int acessos;

 @GetMapping ("/contar")
public  String contar(){
     acessos++;
     return "Você fez um total de "+acessos+" acessos na API";
 }


}
