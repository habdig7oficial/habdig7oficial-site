/*definindo a rota principal*/

module.exports = function (run_express) {
    run_express.get("/",function (req,res) {
        res.render("index.ejs")
    })
}

