import { Produto } from '../../models/Produto';

export class getAllProdutosService {
    async execute() {
        const produtos = await Produto.findAll();

        return produtos;
    }
}