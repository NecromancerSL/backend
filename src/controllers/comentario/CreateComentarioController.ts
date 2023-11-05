import { CreateComentarioService } from "../../services/comentario/CreateComentarioService";
import { Request, Response } from "express";

class CreateComentarioController {
    async handle(request: Request, response: Response) {
        const { nota, comentario, usuarioId, produtoId, usuarioNome} = request.body;

        const createComentarioService = new CreateComentarioService();

        const comentarioCriado = await createComentarioService.execute({
            nota,
            comentario,
            usuarioId,
            produtoId,
            usuarioNome
        });

        return response.json(comentarioCriado);
    }
}

export const createComentarioController = new CreateComentarioController();