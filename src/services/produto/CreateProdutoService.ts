import { Produto } from "../../models/Produto";
import { IProdutoData } from "../../interfaces/IProduto";

export class CreateProdutoService {
    async execute({ nome, preco, descricao, imagem, categoria, qntEstoque }: IProdutoData) {
        try{
            
            const produto = await Produto.create({ nome, preco, descricao, categoria, imagem, qntEstoque });

            return produto;
        }catch(error){
            throw error;
        }
        
    }
}


