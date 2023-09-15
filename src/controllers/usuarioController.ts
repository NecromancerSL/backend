import { Request, Response } from "express";
import { Usuario } from "../models/Usuario";

export const cadastrarUsuario = async (req: Request, res: Response) => {
    const { name, email, password, cpf, telefone } = req.body;

    try {
        const usuario = await Usuario.create({
            name,
            email,
            password,
            cpf,
            telefone,
        });
        return res.json(usuario);
    } catch (error) {
        return res.status(500).json(error);
    }
};

export const editarUsuario = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, email, password, cpf, telefone } = req.body;

    try {
        const usuario = await Usuario.update(
            {
                name,
                email,
                password,
                cpf,
                telefone,
            },
            {
                where: { id },
            }
        );
        return res.json(usuario);
    } catch (error) {
        return res.status(500).json(error);
    }
};

export const excluirUsuario = async (req: Request, res: Response) => {
    const {id} = req.params;
    try{
        const usuario = await Usuario.destroy({
            where: {id}
        });
        }catch(error){
            return res.status(500).json(error);
    }
}
