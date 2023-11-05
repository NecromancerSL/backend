import { createComentarioController } from "../../controllers/comentario/CreateComentarioController";
import { getAllComentarioByProdutoIdController } from "../../controllers/comentario/GetAllComentarioByProdutoIdController";
import { Router } from "express";
import bodyParser from "body-parser";

const comentarioRoutes = Router();
comentarioRoutes.use(bodyParser.json());

comentarioRoutes.post("/comentar", createComentarioController.handle);
comentarioRoutes.get("/comentarios/:produto_id", getAllComentarioByProdutoIdController.handle);

export default comentarioRoutes;