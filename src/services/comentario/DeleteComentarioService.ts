import { Comentario } from "../../models/Comentario";

export class DeleteComentarioService {
  async execute(id: string) {
    const comentario = await Comentario.findOne({ where: { id } });

    if (!comentario) {
      throw new Error("Comentario não existe");
    }

    await comentario.destroy();
  }
}