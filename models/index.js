const Sequelize = require("sequelize");

const env = process.env.NODE_ENV || "development";
const config = require("../config/config.js")[env];
const db = {};

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require("./user")(sequelize, Sequelize);
db.Stock = require("./stock")(sequelize, Sequelize);
db.Selected = require("./selected")(sequelize, Sequelize);

module.exports = db;