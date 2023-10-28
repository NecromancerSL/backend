import { Endereco } from '../../models/Endereco';
import { IEnderecoData } from '../../interfaces/IEndereco';

export class UpdateEnderecoByIdService {
    async execute(enderecoId: number, { cep, rua, numero, apelido, complemento, bairro, cidade, estado, userId }: IEnderecoData) {
        try {
            // Verifique se o endereço com o ID fornecido existe
            const endereco = await Endereco.findByPk(enderecoId);

            if (!endereco) {
                throw new Error('Endereço não encontrado');
            }

            // Atualize os campos do endereço com os novos valores
            endereco.cep = cep;
            endereco.rua = rua;
            endereco.numero = numero;
            endereco.apelido = apelido;
            endereco.complemento = complemento;
            endereco.bairro = bairro;
            endereco.cidade = cidade;
            endereco.estado = estado;
            endereco.usuarioId = userId;

            // Salve as alterações no banco de dados
            await endereco.save();

            return endereco;
        } catch (error) {
            // Lide com erros
            console.error('Erro ao atualizar endereço:', error);
            throw new Error('Erro ao atualizar endereço');
        }
    }
}