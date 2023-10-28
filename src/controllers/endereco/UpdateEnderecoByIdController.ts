import { Request, Response } from 'express';
import { UpdateEnderecoByIdService } from '../../services/endereco/UpdateEnderecoByIdService';

class UpdateEnderecoByIdController {
  async update(request: Request, response: Response) {
    try {
      const { enderecoId } = request.params; // Você pode obter o ID do endereço a partir dos parâmetros da URL
      const { cep, rua, numero, apelido, complemento, bairro, cidade, estado, userId } = request.body; // Obtenha os novos dados do endereço do corpo da requisição

      const updateEnderecoService = new UpdateEnderecoByIdService();
      const endereco = await updateEnderecoService.execute(Number(enderecoId), {
        cep,
        rua,
        numero,
        apelido,
        complemento,
        bairro,
        cidade,
        estado,
        userId,
      });

      return response.json(endereco);
    } catch (error) {
      return response.status(400).json({ error: 'Erro ao atualizar endereço' });
    }
  }
}

export const updateEnderecoByIdController = new UpdateEnderecoByIdController();

