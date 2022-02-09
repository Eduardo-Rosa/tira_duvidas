const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");
const Pergunta = require("./database/Pergunta");



//Database
connection
    .authenticate()
    .then(()=>{
        console.log("conexão realizada com o banco de dados!")
    })
    .catch((msgErro) => {
        console.log(msgErro);
    });
    

//estou dizendo para o express usar EJS como View engine
app.set('view engine', 'ejs');
app.use(express.static('public'));

//Body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Rotas
app.get("/",(req, res) => {

    res.render("index");
});

app.get("/perguntar",(req, res) => {

    res.render("perguntar");
});


app.post("/salvarpergunta",(req,res)=> {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;

    //equivalente ao INSERT do SQL
    Pergunta.create({
        titulo: titulo,
        descricao: descricao
    }).then(()=>{
        res.redirect("/");
    })
});

app.listen(8000,()=>{console.log("App rodando!");});