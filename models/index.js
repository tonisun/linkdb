let Sequelize = require ("sequelize")
let sequelize = new Sequelize (null, null, null, {
    dialect: "sqlite",
    storage: __dirname + "/../dbs/app.db"
})

/**
 * Model Url mapped show
 */
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

/**
 * 
 */
module.exports = {
    sequelize: sequelize,
    Url: Url
}

