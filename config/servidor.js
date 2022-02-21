/*Importando o módulo do Express framework*/
const express = require("express")

/*Exeucutando o Express framework */
const run_express = express()

/*definindo porta padrão */
const porta = process.env.PORT || 7777

/*permindo acesso aos arquivos de leitura*/
run_express.use(express.static("./assets/"))


/*exportando variavéis*/
module.exports = {run_express,porta}

