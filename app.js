let express = require("express")

let app = express()

let models = require("./models")

app.set("view engine", "ejs")
app.set("views", __dirname + "/views")

app.use("/public", express.static("public"))

app.get("/", function (req, res) {
    res.render("pages/index")
})





app.listen(80)