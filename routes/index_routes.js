/*definindo a rota principal*/

const { application } = require("express")

module.exports = function (run_express) {
    application.get("/",function (req,res) {
        res.render("index.ejs")
    })
}

