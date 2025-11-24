import express from "express";
import contatoRouters from "./src/routes/contato.routes.js";
import cors from "cors";

const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");

    app.use(cors());
    next();
});
app.use(express.json());
app.use(contatoRouters);

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});