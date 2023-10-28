import { Request, Response } from 'express';
import { DeleteEnderecoByIdService } from '../../services/endereco/DeleteEnderecoByIdService'; // Certifique-se de importar o serviço corretamente

class DeleteEnderecoByIdController {
  async handle(req: Request, res: Response) {
    try {
      const { id } = req.params; // Certifique-se de que o nome do parâmetro corresponda à rota no servidor
      const enderecoId = parseInt(id);

      const deleteEnderecoService = new DeleteEnderecoByIdService();
      const result = await deleteEnderecoService.execute(enderecoId);

      return res.status(200).json(result);
    } catch (error) {
      return res.status(404).json({ error: 'Endereço não encontrado' });
    }
  }
}

export const deleteEnderecoByIdController = new DeleteEnderecoByIdController();