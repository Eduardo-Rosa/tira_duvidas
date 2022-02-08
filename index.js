const express = require("express"); //Importando o express
const res = require("express/lib/response");
const app = express(); //iniciando o express


app.get("/", function(req, res){
    res.send("<h1>Bem vindo ao meu site!</h1>");
});


app.get("/blog/:artigo?", function(req, res){
    var artigo = req.params.artigo;
    if(artigo){
        res.send("<h2>Artigo: " +artigo+ "</h2>");
    }else{
        res.send("<h1>Bem vindo ao meu blog </h1><br> <h3>leia o Artido: </h3>");
    };
    
});


app.get("/canal/youtube", function(req, res){
    var canal = req.query["canal"];
    if(canal){
        res.send(canal);
    }else{
        res.send("nenhum canal fornecido");

        //test
    }
});


app.get("/ola/:nome", function(req,res){
    //req é a requisição enviada pelo usuário
    //res é a resposta que retorna para o usuário
    var nome = req.params.nome;
    res.send("<h1>Boa Noite </h1>" + nome+ " você esta se esforçando..<br> Logo colherá os frutos!");
});




app.listen(4000,function(erro){
    if(erro){
        console.log("Ocorreu um erro!");
    }else{
        console.log("Servidor iniciado com sucesso!");
    }
});