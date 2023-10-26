import { Produto } from "../../models/Produto";
import { IProdutoData } from "../../interfaces/IProduto";

export class CreateProdutoService {
    async execute({ nome, preco, descricao, imagem, categoria, marca, qntEstoque }: IProdutoData) {
        try{
            
            const produto = await Produto.create({ nome, preco, descricao, categoria, marca, imagem, qntEstoque });

            return produto;
        }catch(error){
            throw error;
        }
        
    }
}


