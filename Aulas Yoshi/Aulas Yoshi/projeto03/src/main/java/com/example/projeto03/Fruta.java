package com.example.projeto03;

public class Fruta {

    private String nome;
    private Double  preco;
    private Integer quantidade;
    private Boolean comSemente;
    private Double calorias = 100.0;


    public String getNome() {
        return nome;
    }

    public Double getPreco() {
        return preco;
    }

    public Integer getQuantidade() {
        return quantidade;
    }

    public Boolean getComSemente() {
        return comSemente;
    }

    public Double getCalorias() {
        return calorias;
    }
    public  Boolean isRecomendavelCrinancas(){
        return !comSemente;
    }

    public String getDescricao(){
        return  "Fruta"+nome+" Vendida por "+preco;
    }

    public Fruta(String nome, Double preco, Integer quantidade, Boolean comSemente) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
        this.comSemente = comSemente;
    }

    public Fruta(String nome, Double preco, Integer quantidade, Boolean comSemente, Double calorias) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
        this.comSemente = comSemente;
        this.calorias = calorias;
    }
}
