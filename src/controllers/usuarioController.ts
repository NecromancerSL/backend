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