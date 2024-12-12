import express, {Request, Response } from 'express';
const app = express();

app.use(express.json())
app.use(express.static('public'))


app.listen(3000, () => console.log('servidor iniciado com sucesso'))