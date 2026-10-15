import express from 'express';
import { readData } from '../../db/DBUsuario.js';

export const usuarios = express.Router();

/**
* route GET /v1/api/usuarios
**/
usuarios.get("/", (req, res) => {
    res.json(readData());
});