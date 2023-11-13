import { Request, Response } from "express";
import { DeleteComentarioService } from "../../services/comentario/DeleteComentarioService";

class DeleteComentarioController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const deleteComentarioService = new DeleteComentarioService();

    await deleteComentarioService.execute(id);

    return response.status(204).send();
  }
}

export const deleteComentarioController = new DeleteComentarioController();