import { Produto } from '../../models/Produto';

export class GetAllProdutosService {
    async execute() {
        const produtos = await Produto.findAll();

        return produtos;
    }
}