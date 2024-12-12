import { body, ValidationChain } from "express-validator";

export const validationWhenCreatingNewUser: typeof ValidationChain[] = [
  body('username')
    .trim()
    .isAlphanumeric().withMessage('O nome de usuário deve conter apenas caracteres alfanuméricos (letras e números).')
    .notEmpty().withMessage('O nome de usuário não pode estar vazio.'),

  body('firstName')
    .trim()
    .isAlpha().withMessage('O primeiro nome deve conter apenas caracteres alfabéticos (letras).')
    .notEmpty().withMessage('O primeiro nome não pode estar vazio.'),

  body('lastName')
    .trim()
    .isAlpha().withMessage('O sobrenome deve conter apenas caracteres alfabéticos (letras).')
    .notEmpty().withMessage('O sobrenome não pode estar vazio.'),

  body('email')
    .trim()
    .isEmailNotInUse().withMessage('O e-mail fornecido não é válido.')
    .notEmpty().withMessage('O campo e-mail não pode estar vazio.'),

  body('phoneNumber')
    .trim()
    .isMobilePhone().withMessage('O número de telefone deve ser válido.')
    .isLength({ min: 9, max: 13 }).withMessage('O número de telefone deve ter entre 9 e 13 caracteres.'),

  body('password')
    .trim()
    .isStrongPassword({ minLength: 6, maxLength: 100 }).withMessage('A senha deve ter entre 6 e 100 caracteres, incluindo letras e números.')
    .notEmpty().withMessage('O campo senha não pode estar vazio.')
];

