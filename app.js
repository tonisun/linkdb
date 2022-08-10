let express = require ("express")
let bodyParser = require("body-parser")

let app = express ()

let models = require ("./models")
console.dir(models);

models.sequelize.sync ({force: true}).then (function () {
    console.log('Models-Log: 1. TABELLEN ERSTELLT');

    app.set ("view engine", "ejs")
    app.set ("views", __dirname + "/views")

    app.use (bodyParser.urlencoded ({
        extended: true
    }))

    app.use ("/public", express.static("public"))

    app.get ("/", function (req, res) {
        let id = parseInt (req.query.id, 10)
        console.log(id)
        if (isNaN(id)) {
            res.render ("pages/index")
        } else {
            models.Url.findByPk(id).then (function (obj) {
                if (obj == null) {
                    res.end("FEHLER!")
                } else {
                    res.render ("pages/redirect", {
                        url: obj
                    })
                }   
            })
        }
    })

    app.post ("/create", function (req, res) {
        console.dir (req.body)
        models.Url.create ({
            url: req.body.url,
            desc: req.body.desc
        }).then (function (obj) {
            console.dir (obj.id)
            
            res.redirect ("/created?id=" + obj.id)
            console.log ('INS-Log: Datensatz wurde in app.db eingefühgt.')
        })
    })

    app.get ("/created", function (req, res) {
        let id = parseInt (req.query.id, 10)
        // models.Url.findById(id).then (function (obj) {
        models.Url.findByPk(id).then (function (obj) {
            if (obj == null) {
                res.end ("FEHLER")
            } else {
                console.dir (obj)
                res.render("pages/created", {
                    id: obj.query.id,
                    url: obj.query.url,
                    desc: obj.query.desc
                })
            }
        })
    })

    app.listen (8080, function () {
        console.log ('Server-Log: 2. Webserver wurde auf Port 8080 gestartet') 
    })    
})



