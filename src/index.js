require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const router = require("./routes/routes");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(helmet());
app.use(morgan("combined"));
app.use(cors());

app.use("/",router);



app.listen(process.env.PORT, () => {
    console.log(`Servidor online em ${process.env.host}:${process.env.PORT}`)
});