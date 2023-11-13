import { createComentarioController } from "../../controllers/comentario/CreateComentarioController";
import { getAllComentarioByProdutoIdController } from "../../controllers/comentario/GetAllComentarioByProdutoIdController";
import { updateComentarioController } from "../../controllers/comentario/UpdateComentarioController";
import { deleteComentarioController } from "../../controllers/comentario/DeleteComentarioController";
import { Router } from "express";
import bodyParser from "body-parser";

const comentarioRoutes = Router();
comentarioRoutes.use(bodyParser.json());

comentarioRoutes.post("/comentar", createComentarioController.handle);
comentarioRoutes.get("/comentarios/:produto_id", getAllComentarioByProdutoIdController.handle);
comentarioRoutes.put("/editarcomentario", updateComentarioController.handle);
comentarioRoutes.delete("/excluircomentario/:id", deleteComentarioController.handle);

export default comentarioRoutes;