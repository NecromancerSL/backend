import { Request, Response } from 'express'; // Supondo que você está usando o Express.js
import { ListEnderecosByUserIdService } from '../../services/endereco/ListEnderecosByUserIdService'; // Importe o serviço que criamos

class ListEnderecosByUserIdController {
    async handle(request: Request, response: Response) {
        try {
            const { userId } = request.params; // Supondo que o ID do usuário seja passado como parâmetro na rota
            const listEnderecosService = new ListEnderecosByUserIdService();

            const enderecos = await listEnderecosService.execute(parseInt(userId, 10));

            return response.json(enderecos);
        } catch (error) {
            console.error('Erro ao listar endereços do usuário:', error);
            return response.status(500).json({ error: 'Erro ao listar endereços do usuário' });
        }
    }
}

export const listEnderecosByUserIdController = new ListEnderecosByUserIdController();