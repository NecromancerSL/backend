import { Comentario } from "../../models/Comentario";

export class GetAllComentarioByProdutoIdService {
  async execute(produtoId: number) {
    const comentarios = await Comentario.findAll({
      where: {
        produtoId,
      },
    });

    if (!comentarios) {
      throw new Error("Comentários não encontrados");
    }

    return comentarios;
  }
}
