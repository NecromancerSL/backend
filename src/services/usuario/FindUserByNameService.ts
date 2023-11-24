import { Usuario } from "../../models/Usuario";

export class FindUserByNameService {
  async execute(name: string) {
    try {
      const user = await Usuario.findOne({
        where: {
          name: name,
        },
      });

      return user;
    } catch (error) {
      throw error;
    }
  }
}