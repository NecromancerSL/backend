import { createEnderecoController } from "../../controllers/endereco/CreateEnderecoController";
import { Router } from "express";
import bodyParser from "body-parser";

const enderecoRoutes = Router();
enderecoRoutes.use(bodyParser.json());

enderecoRoutes.post("/cadastrarendereco", createEnderecoController.handle);

export default enderecoRoutes;