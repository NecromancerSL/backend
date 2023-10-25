import jwt from 'jsonwebtoken';

// Chave secreta para assinar os tokens
const secretKey = 'a593b5ffcbd2f783d02c634cbb39506e'; // Substitua pela sua chave real

export function generateAdminToken(adminId: number) {
  // Criar um token JWT com o ID do administrador
  const token = jwt.sign({ adminId }, secretKey, { expiresIn: '1h' }); // Defina o tempo de expiração desejado

  return token;
}
