import { Admin } from '../../models/Admin';
import { IAdminData } from '../../interfaces/IAdmin';
import bcrypt from 'bcryptjs';

export class createAdminService {
    async execute({ name, email, password }: IAdminData) {
        try {

            const hashedPassword = await bcrypt.hash(password, 10);
            const admin = await Admin.create({
              name,
              email,
              password: hashedPassword,
            });

            return admin;

          } catch (error) {
                throw error;
          }
    }
}