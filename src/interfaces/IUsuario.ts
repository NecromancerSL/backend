export interface IUsuarioData {
    name: string;
    email: string;
    password: string;
    cpf: string;
    telefone: string;
}

export interface IUsuarioLoginData {
    email: string;
    password: string;
}

export interface IUsuarioUpdateData {
    id: number;
    currentPassword: string;
    newPassword: string;
}