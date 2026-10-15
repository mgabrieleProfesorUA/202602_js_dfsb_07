import express from 'express';
import { libros } from './routes/api/libros.js';
import { usuarios } from './routes/api/usuarios.js';

const app = express();

function requireApiKey(req, res, next) {
    const apiKey = req.headers['x-api-key'];
    console.log(`apiKey -> ${apiKey}`)
    if (!apiKey || apiKey !== process.env.API_KEY) {
        const error = new Error('A valid API key is required.');
        error.status = 401;
        return next(error);
    }
    next();
}

app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use("/v1/api/libros", requireApiKey, libros);
app.use("/v1/api/usuarios", requireApiKey, usuarios);

app.listen(3000, () => console.log("Servidor Disponible en el puerto 3000 para las peticiones"));