import { createPedidoController } from "../../controllers/pedido/CreatePedidoController";
import { Router } from "express";
import bodyParser from "body-parser";

const pedidoRoutes = Router();

pedidoRoutes.use(bodyParser.json());

pedidoRoutes.post("/criarpedido", createPedidoController.handle);

export default pedidoRoutes;