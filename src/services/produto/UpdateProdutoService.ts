import { Produto } from '../../models/Produto';
import { IProdutoData } from '../../interfaces/IProduto';

export class UpdateProdutoService {
    async execute(id: number, { nome, preco, descricao, categoria, marca, imagem, qntEstoque }: IProdutoData) {
        const produto = await Produto.findByPk(id);

        if (!produto) {
            throw new Error('Produto não encontrado');
        }

        try{
            const produto = await Produto.update(
                {
                    nome,
                    preco,
                    descricao,
                    categoria,
                    marca,
                    imagem,
                    qntEstoque,
                },
                {
                    where: { id },
                }
            );
            return produto;
        }catch(error){
            throw error;
        }
    }
}
