const express = require("express");
const app = express();

//estou dizendo para o express usar EJS como View engine
app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get("/",(req, res) => {

    res.render("perguntar");
});

app.listen(8000,()=>{console.log("App rodando!");});