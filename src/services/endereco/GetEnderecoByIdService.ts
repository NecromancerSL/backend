import { Endereco } from '../../models/Endereco';

export class GetAddressByIdService {
  async execute(id: number) {
    // Realize a busca do endereço no banco de dados com o ID fornecido
    // Certifique-se de que o ID seja um número inteiro
    const endereco = await Endereco.findByPk(id);

    if (!endereco) {
      throw new Error('Endereço não encontrado');
    }

    return endereco;
  }
}