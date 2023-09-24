import { Admin } from '../../models/Admin';
import { IAdminData } from '../../interfaces/IAdmin';
import { hash } from 'bcryptjs';

export class createAdminService {
    async execute({ name, email, password }: IAdminData) {
        try {

          if(!email) {
            throw new Error("Email incorreto")
          }

          const adminExistente = await Admin.findOne({
            where: {
              email: email,
            },
          })

          if(adminExistente) {
            throw new Error("Administrador já existe")
          }


            const hashedPassword = await hash(password, 10);

            const admin = await Admin.create({
              name,
              email,
              password: hashedPassword,
            });

            return admin;

        }catch(error) {
            throw error;
          }
    }
}