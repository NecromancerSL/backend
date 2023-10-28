import { Request, Response } from 'express';
import { GetAddressByIdService } from '../../services/endereco/GetEnderecoByIdService';

class GetEnderecoByIdController {
  async handle(req: Request, res: Response) {
    try {
      const { enderecoId } = req.params; // Certifique-se de que o nome do parâmetro corresponda à rota no cliente
      const addressId = parseInt(enderecoId); // Certifique-se de que o ID seja convertido em um número

      const getAddressService = new GetAddressByIdService();
      const address = await getAddressService.execute(addressId);

      return res.status(200).json(address);
    } catch (error) {
      return res.status(404).json({ error: 'Endereço não encontrado' });
    }
  }
}

export const getEnderecoByIdController= new GetEnderecoByIdController();