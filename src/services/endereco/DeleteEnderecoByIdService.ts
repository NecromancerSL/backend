import { Endereco } from '../../models/Endereco';

export class DeleteEnderecoByIdService {
  async execute(id: number) {
    try {
      // Verifique se o endereço com o ID fornecido existe
      const endereco = await Endereco.findByPk(id);

      if (!endereco) {
        throw new Error('Endereço não encontrado');
      }

      // Realize a exclusão do endereço
      await endereco.destroy();

      return { message: 'Endereço excluído com sucesso' };
    } catch (error: any) { // Use "as any" para realizar a verificação de tipo
      throw new Error('Erro ao excluir endereço: ' + (error as Error).message);
    }
  }
}


