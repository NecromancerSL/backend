import { Request, Response } from "express";
import { Admin } from "../models/Admin";
import bcrypt from "bcryptjs";

export const cadastrarAdmin = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    try {

        const hashedPassword = await bcrypt.hash(password, 10);

        const admin = await Admin.create({
            name,
            email,
            password: hashedPassword,
        });
        return res.json(admin);
    } catch (error) {
        return res.status(500).json(error);
    }
};


export const atualizarCadastroAdmin = async (req: Request, res: Response) => {
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


export const loginAdmin = async (req: Request, res: Response) => {
    const { email, password } = req.body;
  
    try {
      // Encontre o administrador pelo email fornecido
      const admin = await Admin.findOne({
        where: {
          email,
        },
      });
  
      if (!admin) {
        return res.status(404).json({ message: 'Admin não encontrado!' });
      }
  
      // Verifique a senha criptografada
      const passwordMatch = await bcrypt.compare(password, admin.password);
  
      if (passwordMatch) {
        // Senha está correta, admin está logado com sucesso
        return res.json({ message: 'Login bem-sucedido!', admin });
      } else {
        // Senha incorreta
        return res.status(401).json({ message: 'Senha incorreta!' });
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  };