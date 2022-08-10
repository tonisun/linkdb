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

    app.get ("/", function (req, res, next) {
        let id = parseInt (req.query.q, 10)
        console.log('/?q='+id)
        if (isNaN (id)) {
            res.render ("pages/index")
        } else {
            models.Url.findByPk (id).then (function (obj) {
                if (obj == null) {
                    var err = new Error ("FEHLER")
                    err.status = 404  // ??? id wurde nicht gefunden und nicht ein Site
                    next (err)
                } else {
                    res.render ("pages/redirect", {
                        url: obj
                    })
                }   
            })
        }
    })

    app.post ("/create", function (req, res) {
        //console.dir (req.body)
        models.Url.create ({
            url: req.body.url,
            desc: req.body.desc
        }).then (function (obj) {
            //console.log (obj.id)
            
            res.redirect ("/created?id=" + obj.id)
            console.log ('INS-Log: Datensatz wurde in app.db eingefühgt.')
        })
    })

    app.get ("/created", function (req, res, next) {
        // console.log('req.query:');
        // console.dir(req.query);
        // console.log('end req.query');
        
        let id = parseInt (req.query.id, 10)
        // models.Url.findById(id).then (function (obj) {
        models.Url.findByPk(id).then (function (obj) {
            if (obj == null) {
                var err = new Error ("FEHLER")
                err.status = 404  // ??? id wurde nicht gefunden und nicht ein Site
                next (err)
            } else {
                console.dir (obj.dataValues)
                res.render ("pages/created", {
                    id: obj.dataValues.id,
                    url: obj.dataValues.url,
                    desc: obj.dataValues.desc,
                    createdAt: obj.dataValues.createdAt,
                    updatedAt: obj.dataValues.updatedAt
                })
            }
        })
    })

    app.get ("/test-error", function (req, res) {
        let err = new Error ('Test123')
        err.status = 404
        throw err
    })

    /**
     * Error Handling
     */
    app.use (function (err, req, res, next) {
        let status = 500
        if (err.status) {
            status = err.status
        }
        // console.log ('Err-Log: Error aufgetreten!');
        console.error (err.stack)
        res.status (status).send ('Something broke!')
    })

    app.listen (8080, function () {
        console.log ('Server-Log: 2. Webserver wurde auf Port 8080 gestartet') 
    })    
})



