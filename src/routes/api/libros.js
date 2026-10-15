import express from 'express';
import { readData } from '../../db/DBLibro.js';

export const libros = express.Router();

/**
* route GET /v1/api/libros
**/
libros.get("/", (req, res) => {
    res.json(readData());
});