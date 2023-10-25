import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

// Chave secreta para verificar os tokens de administrador
const adminSecretKey = 'a593b5ffcbd2f783d02c634cbb39506e'; 
// Chave secreta para verificar os tokens de usuário
const userSecretKey = 'b604c6ggdce3g894e13d745dcc40617f'; 

// Estenda a interface Request para adicionar propriedades personalizadas
declare module 'express' {
  export interface Request {
    adminId?: number;
    userId?: number;
  }
}

export interface AdminRequest extends Request {
  adminId?: number;
}

export interface UserRequest extends Request {
  userId?: number;
}


export function verifyAdminToken(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token de administrador não fornecido.' });
  }

  try {
    const decoded = jwt.verify(token, adminSecretKey) as JwtPayload;

    if (decoded && decoded.adminId) {
      req.adminId = decoded.adminId;
      next();
    } else {
      return res.status(403).json({ message: 'Token de administrador inválido.' });
    }
  } catch (error) {
    return res.status(403).json({ message: 'Token de administrador inválido.' });
  }
}

export function verifyUserToken(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token de usuário não fornecido.' });
  }

  try {
    const decoded = jwt.verify(token, userSecretKey) as JwtPayload;

    if (decoded && decoded.userId) {
      req.userId = decoded.userId;
      next();
    } else {
      return res.status(403).json({ message: 'Token de usuário inválido.' });
    }
  } catch (error) {
    return res.status(403).json({ message: 'Token de usuário inválido.' });
  }
}
