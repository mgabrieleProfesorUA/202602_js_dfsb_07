import fs from 'node:fs'
import bodyParser from 'body-parser'

export const readData = () =>{
    try{
        const datos = fs.readFileSync('./dbjson/DBUsuario.json');
        return JSON.parse(datos);
    }catch (error){
        console.log(error);
    }
}