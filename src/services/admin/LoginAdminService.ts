import { Admin } from "../../models/Admin";
import { IAdminLoginData } from "../../interfaces/IAdmin";
import bcrypt from 'bcryptjs';

export class LoginAdminService {
    async execute({ email, password }: IAdminLoginData) {
        try {
            // Find the admin by email
            const admin = await Admin.findOne({
                where: {
                    email,
                },
            });

            if (!admin) {
                throw new Error("Usuário não encontrado");
            }

            
            const passwordMatch = await bcrypt.compare(password, admin.password);

            if (passwordMatch) {
                return admin;
            } else {
                throw new Error("Senha incorreta"); 
            }
        } catch (error) {
            throw error; 
        }
    }
}
