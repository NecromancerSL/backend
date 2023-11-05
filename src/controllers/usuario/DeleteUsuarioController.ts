import { Request, Response } from 'express';
import { DeleteUsuarioService } from '../../services/usuario/DeleteUsuarioService';

class DeleteUsuarioController {
  async handle(req: Request, res: Response) {
    try {
      const { id } = req.params; // Certifique-se de que o id seja passado como parâmetro na rota

      const deleteUsuarioService = new DeleteUsuarioService();
      const usuario = await deleteUsuarioService.execute(Number(id));

      return res.status(200).json({ message: 'Usuário excluído com sucesso', usuario });
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export const deleteUsuarioController = new DeleteUsuarioController();
