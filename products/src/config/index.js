const dotEnv = require("dotenv");
dotEnv.config();

// print all variables

console.log("PORT: ", process.env.PORT);
console.log("MONGODB_URI: ", process.env.MONGODB_URI);
console.log("APP_SECRET: ", process.env.APP_SECRET);
console.log("EXCHANGE_NAME: ", process.env.EXCHANGE_NAME);
console.log("MSG_QUEUE_URL: ", process.env.MSG_QUEUE_URL);

console.log(" ");

module.exports = {
    PORT: process.env.PORT || 3000,
    DB_URL: process.env.MONGODB_URI,
    APP_SECRET: process.env.APP_SECRET,
    BASE_URL: process.env.BASE_URL,
    EXCHANGE_NAME: process.env.EXCHANGE_NAME,
    MSG_QUEUE_URL: process.env.MSG_QUEUE_URL,
    CUSTOMER_SERVICE: "customer_service",
    SHOPPING_SERVICE: "shopping_service",
};