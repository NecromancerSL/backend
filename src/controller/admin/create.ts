import {Request, Response } from "express";
import { Admin } from "../../models/Admin";

export const create = async (req: Request, res: Response) => {
    const { nome, email, senha } = req.body;

    try {
        const admin = await Admin.create({
            nome,
            email,
            senha,
        });
        return res.json(admin);
    } catch (error) {
        return res.status(500).json(error);
    }
};

