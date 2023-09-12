import { Request, Response } from "express";
import { Produto } from "../../models/Produto";

export const create = async (req: Request, res: Response) => {
    const { nome, descricao, preco, imagem, qntEstoque } = req.body;

    try {
        const produto = await Produto.create({
            nome,
            descricao,
            preco,
            imagem,
            qntEstoque,
        });
        return res.json(produto);
    } catch (error) {
        return res.status(500).json(error);
    }
};