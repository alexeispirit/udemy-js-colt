const Repository = require("./repository");

class CartsRespository extends Repository {}

module.exports = new CartsRespository("carts.json");
