/*importando configs do servidor*/
const server_config = require("./config/servidor")

let run_express = server_config.run_express

let porta = server_config.porta

let index_page = require("./routes/index_routes")(run_express)

run_express.listen(porta, function() {
    console.log("habdig7oficial-site rodando na porta" + porta)
})