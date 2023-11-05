import { createPedidoController } from "../../controllers/pedido/CreatePedidoController";
import { getAllPedidosController } from "../../controllers/pedido/GetAllPedidosController";
import { Router } from "express";
import bodyParser from "body-parser";

const pedidoRoutes = Router();

pedidoRoutes.use(bodyParser.json());

pedidoRoutes.post("/criarpedido", createPedidoController.handle);
pedidoRoutes.get("/listarpedidos", getAllPedidosController.handle);

export default pedidoRoutes;