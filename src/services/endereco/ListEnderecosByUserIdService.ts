import { Endereco } from '../../models/Endereco';

export class ListEnderecosByUserIdService {
    async execute(userId: number) {
        try {
            // Busque todos os endereços associados ao usuário com o ID fornecido
            const enderecos = await Endereco.findAll({
                where: {
                    usuarioId: userId
                }
            });

            return enderecos;
        } catch (error) {
            // Lide com erros
            console.error('Erro ao listar endereços do usuário:', error);
            throw new Error('Erro ao listar endereços do usuário');
        }
    }
}

