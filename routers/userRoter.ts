import express from 'express';
import * as userController from "../controllers/userControllers";
import { validationWhenCreatingNewUser } from "../validators/validationWhenCreateUser";

export const userRoutes = express.Router();

userRoutes.post('signup', 
    validationWhenCreatingNewUser, 
    userController.creatingNewUserInDatabase);
