import { Request, Response  } from "express";
import { Admin } from "../../models/Admin";

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