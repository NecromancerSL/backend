import { Request, Response } from "express";
import { UpdateComentarioService } from "../../services/comentario/UpdateComentarioService";
import exp from "constants";

class UpdateComentarioController {
    async handle(request: Request, response: Response) {
        const { nota, comentario, usuarioId, produtoId, usuarioNome } = request.body;

        const updateComentarioService = new UpdateComentarioService();

        const comentarioAtualizado = await updateComentarioService.execute({
            nota,
            comentario,
            usuarioId,
            produtoId,
            usuarioNome,
        });

        return response.json(comentarioAtualizado);
    }
}

export const updateComentarioController = new UpdateComentarioController();