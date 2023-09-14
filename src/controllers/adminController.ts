import { Request, Response } from "express";
import { Admin } from "../models/Admin";

export const create = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    try {
        const admin = await Admin.create({
            name,
            email,
            password,
        });
        return res.json(admin);
    } catch (error) {
        return res.status(500).json(error);
    }
};


export const update = async (req: Request, res: Response) => {
    const { nome, email, senha } = req.body;
    const { id } = req.params;

    try {
        const admin = await Admin.update({
            nome,
            email,
            senha,
        }, {
            where: {
                id
            }
        });
        return res.json(admin);
    } catch (error) {
        return res.status(500).json(error);
    }
};

export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        const admin = await Admin.findOne({
            where: {
                email,
                password,
            }
        });
        return res.json(admin);
    } catch (error) {
        return res.status(500).json(error);
    }
};
