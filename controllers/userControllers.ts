import prisma from "../prisma/client";
import { Request, Response, NextFunction } from "express";
import {validationResult} from 'express-validator';

interface UserData {
  __username: string;
  __firstName: string;
  __lastName: string;
  __email: string;
  __phoneNumber: string;
  __password: string;
}

export const creatingNewUserInDatabase = async(
  req: Request, 
  res: Response, 
  next: NextFunction
): Promise<any> => {
  const {
    __username,
    __firstName,
    __lastName,
    __email,
    __phoneNumber,
    __password,
  } = req.body as unknown as UserData;

  try {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
      return res.status(400).json({errors: errors.array()})
    }
    
    await prisma.user.create({
      data: {
        username: __username,
        firstName: __firstName,
        lastName: __lastName,
        email: __email,
        phoneNumber: __phoneNumber,
        password: __password,
      },
    });
    
    next(); 

    return res.status(201).json({ success: true, message: 'Usuário criado com sucesso' });

  } catch (error) {
  
    console.error(error);
    return res.status(500).json({ success: false, message: 'Não foi possível criar o usuário no banco de dados' });
  }
};
