import { createEnderecoController } from "../../controllers/endereco/CreateEnderecoController";
import { Router } from "express";
import bodyParser from "body-parser";
import { listEnderecosByUserIdController } from "../../controllers/endereco/ListEnderecosByUserIdController";
import { updateEnderecoByIdController } from "../../controllers/endereco/UpdateEnderecoByIdController";
import { getEnderecoByIdController } from "../../controllers/endereco/GetEnderecoByIdController";
import { deleteEnderecoByIdController } from "../../controllers/endereco/DeleteEnderecoByIdController";

const enderecoRoutes = Router();
enderecoRoutes.use(bodyParser.json());

enderecoRoutes.post("/cadastrarendereco", createEnderecoController.handle);
enderecoRoutes.get("/listarenderecos/:userId", listEnderecosByUserIdController.handle);
enderecoRoutes.post("/atualizarendereco/:enderecoId", updateEnderecoByIdController.update);
enderecoRoutes.get("/getendereco/:enderecoId", getEnderecoByIdController.handle);
enderecoRoutes.delete("/deletarendereco/:enderecoId", deleteEnderecoByIdController.handle)

export default enderecoRoutes;