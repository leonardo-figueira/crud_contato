import contatoController from "../controllers/contato.controller.js";
import { Router } from "express";

const contatoRouter = Router();

contatoRouter.post("/contato", contatoController.createContatoController);
contatoRouter.get("/contato", contatoController.findAllContatoController);
contatoRouter.get("/contato/:id", contatoController.findContatoByIdController);
contatoRouter.put("/contato/:id", contatoController.updateContatoController);
contatoRouter.delete("/contato/:id", contatoController.deleteContatoController);

export default contatoRouter;
