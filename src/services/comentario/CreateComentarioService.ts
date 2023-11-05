import { Comentario } from "../../models/Comentario";
import { IComentarioData } from "../../interfaces/Cometario";

export class CreateComentarioService {
    async execute({ nota, comentario, usuarioId, produtoId, usuarioNome}: IComentarioData) {
        try{
            const comentarioExistente = await Comentario.findOne({
                where: {
                    usuarioId: usuarioId,
                    produtoId: produtoId,
                },
            })

            if(comentarioExistente) {
                throw new Error("Comentário já existe")
            }

            const comentarioCriado = await Comentario.create({
                nota,
                comentario,
                usuarioId,
                produtoId,
                usuarioNome,
            });

            return comentarioCriado;
        }catch(error) {
            throw error;
        }
    }
}