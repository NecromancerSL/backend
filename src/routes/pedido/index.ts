import { createPedidoController } from "../../controllers/pedido/CreatePedidoController";
import { getAllPedidosController } from "../../controllers/pedido/GetAllPedidosController";
import { getPedidoByUserIdController } from "../../controllers/pedido/GetPedidoByUserIdController";
import { cancelarPedidoController } from "../../controllers/pedido/CancelPedidoController";
import { updatePedidoController } from "../../controllers/pedido/UpdatePedidoController";
import { Router } from "express";
import bodyParser from "body-parser";

const pedidoRoutes = Router();

pedidoRoutes.use(bodyParser.json());

pedidoRoutes.post("/criarpedido", createPedidoController.handle);
pedidoRoutes.get("/listarpedidos", getAllPedidosController.handle);
pedidoRoutes.get("/listarpedidos/:usuarioId", getPedidoByUserIdController.handle);
pedidoRoutes.put("/cancelarpedido/:pedidoId", cancelarPedidoController.handle);
pedidoRoutes.put("/editarstatuspedido/:pedidoId", updatePedidoController.handle);

export default pedidoRoutes;