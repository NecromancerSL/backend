import { Comentario } from "../../models/Comentario";
import { IComentarioData } from "../../interfaces/Cometario";

export class UpdateComentarioService {
    async execute({ nota, comentario, usuarioId, produtoId, usuarioNome}: IComentarioData) {
        try{
            const comentarioExistente = await Comentario.findOne({
                where: {
                    usuarioId: usuarioId,
                    produtoId: produtoId,
                },
            })

            const comentarioUsuario = await Comentario.findOne({
                where: {
                    usuarioId: usuarioId,
                },
            })

            if(!comentarioExistente) {
                throw new Error("Comentário não existe")
            }

            const comentarioAtualizado = await Comentario.update({
                nota,
                comentario,
                usuarioId,
                produtoId,
                usuarioNome,
            }, {
                where: {
                    usuarioId: usuarioId,
                    produtoId: produtoId,
                },
            });

            return comentarioAtualizado;
        }catch(error) {
            throw error;
        }
    }
}