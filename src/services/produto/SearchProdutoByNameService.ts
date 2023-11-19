import { Op } from "sequelize";
import { Produto } from "../../models/Produto";
import { IProdutoData } from "../../interfaces/IProduto";

export class SearchProdutoByNameService {
  async execute(nome: string): Promise<IProdutoData[]> {
    try {
      const produtos = await Produto.findAll({
        where: {
          nome: {
            [Op.like]: `%${nome}%`,
          },
        },
      });

      const produtosData: IProdutoData[] = produtos.map((produto) => produto.toJSON());

      console.log('Produtos encontrados:', produtosData); // Adicione esta linha para debug

      return produtosData;
    } catch (error) {
      console.error("Error searching products by name:", error);
      throw error;
    }
  }
}
