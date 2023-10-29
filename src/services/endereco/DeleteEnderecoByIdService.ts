import { Endereco } from '../../models/Endereco';

export class DeleteEnderecoService {
  async execute(id: number) {
    
      const endereco = await Endereco.findByPk(id);

      if (!endereco) {
        throw new Error('Endereço não encontrado');
      }
      
      await endereco.destroy();
      return { message: 'Endereço excluído com sucesso' };
  }
}


