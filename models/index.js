let Sequelize = require ("sequelize")
let sequelize = new Sequelize (null, null, null, {
    dialect: "sqlite",
    storage: __dirname + "/../dbs/app.db"
})

let Url = sequelize.define ("url", {
    url: {
        type: Sequelize.STRING,
        field: "url"
    },
    desc: {
        type: Sequelize.STRING,
        field: "desc"
    }
})

Url.sync ({force: true}).then ( function () {
    // if (err) 
    console.log('MSG-Log: Tabelle wurde erstellt')
    
    Url.create ({
        url: "https://org.egosanto.de",
        desc: "Unemployed software developer in Cologne Germany"
    })
})