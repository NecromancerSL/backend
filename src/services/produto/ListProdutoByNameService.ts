import { Produto } from "../../models/Produto";
import { IProdutoData } from "../../interfaces/IProduto";
import { Op } from "sequelize";

export class ListProdutoByNameService {
  async execute(nome: string): Promise<IProdutoData[]> {
    try {
      const produtos = await Produto.findAll({
        where: {
          nome: {
            [Op.iLike]: `%${nome}%`, // Use Op.iLike for case-insensitive partial match
          },
        },
      });

      // Assuming IProdutoData is the shape of your data, you might need to map it
      const produtosData: IProdutoData[] = produtos.map((produto) => produto.toJSON());

      return produtosData;
    } catch (error) {
      // Handle errors, log, or throw an exception
      console.error("Error fetching products by name:", error);
      throw error;
    }
  }
}
