let express = require ("express")

let app = express ()

let models = require ("./models")
console.dir(models);

models.sequelize.sync ({force: true}).then (function () {
    console.log('Models-Log: 1. TABELLEN ERSTELLT');

    app.set ("view engine", "ejs")
    app.set ("views", __dirname + "/views")

    app.use ("/public", express.static("public"))

    app.get ("/", function (req, res) {
        res.render ("pages/index")
    })

    app.listen(8080, function () {
        console.log('2. Server-Log: Webserver wurde auf Port 8080 gestartet');  
    })    
})



