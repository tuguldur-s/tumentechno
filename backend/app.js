const express = require("express");
var cors = require('cors')
const app = express();
const fileupload = require('express-fileupload');

app.use(express.json());
app.use(fileupload());
app.use(cors({
  exposedHeaders: "*"
}));
app.use(express.urlencoded({ extended: true }));
//Bring in the routes
app.use("/api/product", require("./routes/product"));
app.use("/api/home", require("./routes/home"));
app.use("/api/user", require("./routes/user"));
app.use("/api/purchase", require("./routes/purchase"));
app.use("/api/admin", require("./routes/admin"));
app.use(express.static('public'))

//Setup Error Handlers
const errorHandlers = require("./handlers/errorHandler");
app.use(errorHandlers.notFound);
app.use(errorHandlers.mongoseErrors);
if (process.env.ENV === "DEVELOPMENT") {
  app.use(errorHandlers.developmentErrors);
} else {
  app.use(errorHandlers.productionErrors);
}

module.exports = app;