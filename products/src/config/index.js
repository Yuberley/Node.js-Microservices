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
    PORT: process.env.PORT || 8002,
    DB_URL: process.env.MONGODB_URI || "mongodb+srv://yefersonguerrero:yefersonguerrero@efruvercluster.g37fx7f.mongodb.net/ms_products",
    APP_SECRET: process.env.APP_SECRET || "ms_nodejs",
    BASE_URL: process.env.BASE_URL,
    EXCHANGE_NAME: process.env.EXCHANGE_NAME || "ONLINE_STORE",
    MSG_QUEUE_URL: process.env.MSG_QUEUE_URL || "amqps://euvxnjdk:muicNNpcjkF106zJijhPz1WyXCOzsmwQ@roedeer.rmq.cloudamqp.com/euvxnjdk",
    CUSTOMER_SERVICE: "customer_service",
    SHOPPING_SERVICE: "shopping_service",
};