"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationWhenCreatingNewUser = void 0;
const express_validation_1 = require("express-validation");
exports.validationWhenCreatingNewUser = [
    (0, express_validation_1.body)('username')
        .trim()
        .isAlphanumeric().withMessage('O nome de usuário deve conter apenas caracteres alfanuméricos (letras e números).')
        .notEmpty().withMessage('O nome de usuário não pode estar vazio.'),
    (0, express_validation_1.body)('firstName')
        .trim()
        .isAlpha().withMessage('O primeiro nome deve conter apenas caracteres alfabéticos (letras).')
        .notEmpty().withMessage('O primeiro nome não pode estar vazio.'),
    (0, express_validation_1.body)('lastName')
        .trim()
        .isAlpha().withMessage('O sobrenome deve conter apenas caracteres alfabéticos (letras).')
        .notEmpty().withMessage('O sobrenome não pode estar vazio.'),
    (0, express_validation_1.body)('email')
        .trim()
        .isEmailNotInUse().withMessage('O e-mail fornecido não é válido.')
        .notEmpty().withMessage('O campo e-mail não pode estar vazio.'),
    (0, express_validation_1.body)('phoneNumber')
        .trim()
        .isMobilePhone().withMessage('O número de telefone deve ser válido.')
        .isLength({ min: 9, max: 13 }).withMessage('O número de telefone deve ter entre 9 e 13 caracteres.'),
    (0, express_validation_1.body)('password')
        .trim()
        .isStrongPassword({ minLength: 6, maxLength: 100 }).withMessage('A senha deve ter entre 6 e 100 caracteres, incluindo letras e números.')
        .notEmpty().withMessage('O campo senha não pode estar vazio.')
];
