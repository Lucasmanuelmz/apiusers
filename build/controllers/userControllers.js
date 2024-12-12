"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.creatingNewUserInDatabase = void 0;
const client_1 = __importDefault(require("../prisma/client"));
const creatingNewUserInDatabase = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { __username, __firstName, __lastName, __email, __phoneNumber, __password, } = req.body;
    try {
        yield client_1.default.user.create({
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
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: 'Não foi possível criar o usuário no banco de dados' });
    }
});
exports.creatingNewUserInDatabase = creatingNewUserInDatabase;
