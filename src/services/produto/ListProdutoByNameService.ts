import { Produto } from "../../models/Produto";
import { IProdutoData } from "../../interfaces/IProduto";
import { Op } from "sequelize";

export class ListProdutoByNameService {
  async execute(nome: string): Promise<IProdutoData[]> {
    try {
      const produtos = await Produto.findAll({
        where: {
          nome: {
            [Op.iLike]: `%${nome}%`,
          },
        },
      });

      const produtosData: IProdutoData[] = produtos.map((produto) => produto.toJSON());

      return produtosData;
    } catch (error) {
      console.error("Error fetching products by name:", error);
      throw error;
    }
  }
}
