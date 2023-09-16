import { Request, Response } from "express";
import { Produto } from "../models/Produto";

export const cadastrarProduto = async (req: Request, res: Response) => {
    const { nome, descricao, categoria, preco, imagem, qntEstoque } = req.body;

    if (!nome || !descricao || !categoria || !preco || !imagem || !qntEstoque) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
      }
    
    try {
        const produto = await Produto.create({
            nome,
            descricao,
            categoria,
            preco,
            imagem,
            qntEstoque,
        });
        return res.json(produto);
    } catch (error) {
        return res.status(500).json(error);
    }
};

export const listarProdutos = async (req: Request, res: Response) => {
    try {
        const produtos = await Produto.findAll();
        return res.json(produtos);
    } catch (error) {
        return res.status(500).json(error);
    }
};



