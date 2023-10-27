import { Endereco } from '../../models/Endereco';
import { IEnderecoData } from '../../interfaces/IEndereco';
export class CreateEnderecoService {
    async execute({ cep, rua, numero, complemento, bairro, cidade, estado, userId }: IEnderecoData) {
        try {
            // Crie o endereço associado ao usuário
            const endereco = await Endereco.create({
                cep,
                rua,
                numero,
                complemento,
                bairro,
                cidade,
                estado,
                usuarioId: userId, // Associe o endereço ao usuário definindo o ID do usuário
            });

            return endereco;
        } catch (error) {
            // Lide com erros
            console.error('Erro ao criar endereço:', error);
            throw new Error('Erro ao criar endereço');
        }
    }
}
