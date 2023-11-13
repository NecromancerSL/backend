import { Produto } from "../../models/Produto";
import { IProdutoData } from "../../interfaces/IProduto";

export class GetProdutoByNameService {
  async execute(nome: string): Promise<IProdutoData[]> {
    const produto = await Produto.findAll({
      where: {
        nome: nome,
      },
    });

    return produto;
  }
}
