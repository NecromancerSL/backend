import { adicionarProdutoAoPedidoController } from "../../controllers/pedido/AddItemForPedidoController";
import { Router } from "express";
import bodyParser from "body-parser";

const pedidoRoutes = Router();
pedidoRoutes.use(bodyParser.json());

pedidoRoutes.post("/adicionarprodutoaopedido", adicionarProdutoAoPedidoController.handle);

export default pedidoRoutes;