import jwt from 'jsonwebtoken';

// Chave secreta para assinar os tokens
const secretKey = 'b604c6ggdce3g894e13d745dcc40617f'; // Substitua pela sua chave real

export function generateUserToken(userId: number) {
  // Criar um token JWT com o ID do usuário
  const token = jwt.sign({ userId }, secretKey, { expiresIn: '1h' }); // Defina o tempo de expiração desejado

  return token;
}