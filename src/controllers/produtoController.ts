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

export const atualizarProduto = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { nome, descricao, categoria, preco, imagem, qntEstoque } = req.body;

    if (!nome || !descricao || !categoria || !preco || !imagem || !qntEstoque) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
      }

    try {
        const produto = await Produto.findByPk(id);

        if (!produto) {
            return res.status(400).json({ message: 'Produto não encontrado' });
        }

        await produto.update({
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

export const listarProduto = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const produto = await Produto.findByPk(id);

        if (!produto) {
            return res.status(400).json({ message: 'Produto não encontrado' });
        }

        return res.json(produto);
    } catch (error) {
        return res.status(500).json(error);
    }
};

export const deletarProduto = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const produto = await Produto.findByPk(id);

        if (!produto) {
            return res.status(400).json({ message: 'Produto não encontrado' });
        }

        await produto.destroy();

        return res.json({ message: 'Produto deletado com sucesso' });
    } catch (error) {
        return res.status(500).json(error);
    }
};
