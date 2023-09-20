/* import { Request, Response } from "express";
import { Usuario } from "../models/Usuario";
import bcrypt from "bcryptjs";

export const cadastrarUsuario = async (req: Request, res: Response) => {
    const { name, email, password, cpf, telefone } = req.body.user;

    try {

        const hashedPassword = await bcrypt.hash(password, 10);

        const usuario = await Usuario.create({
            name,
            email,
            password: hashedPassword,
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


export const loginUsuario = async (req: Request, res: Response) => {
    const { email, password } = req.body;
  
    try {
      // Encontre o usuário pelo email fornecido
      const usuario = await Usuario.findOne({
        where: {
          email,
        },
      });
  
      if (!usuario) {
        return res.status(404).json({ message: 'Usuário não encontrado!' });
      }
  
      // Verifique a senha criptografada
      const passwordMatch = await bcrypt.compare(password, usuario.password);
  
      if (passwordMatch) {
        // Senha está correta, usuário está logado com sucesso
        return res.json({ message: 'Login bem-sucedido!', usuario });
      } else {
        // Senha incorreta
        return res.status(401).json({ message: 'Senha incorreta!' });
      }
    } catch (error) {
      return res.status(500).json(error);
    }
};

export const nomeUsuario = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    // Use o método `findByPk` do Sequelize para encontrar o usuário pelo ID
    const usuario = await Usuario.findByPk(id);

    if (!usuario) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }

    const nomeUsuario = usuario.name;
    return res.json({ nome: nomeUsuario });
  } catch (error) {
    console.error("Erro ao buscar nome do usuário:", error);
    return res.status(500).json({ error: "Erro interno do servidor" });
  }
};
 */