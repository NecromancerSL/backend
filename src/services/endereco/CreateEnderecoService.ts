import { Endereco } from '../../models/Endereco';
import { IEnderecoData } from '../../interfaces/IEndereco';

export class CreateEnderecoService {
    async execute({ cep, rua, numero, complemento, bairro, cidade, estado }: IEnderecoData) {

        const endereco = await Endereco.create({
            cep,
            rua,
            numero,
            complemento,
            bairro,
            cidade,
            estado,
        });

        return endereco;
    }
}