//import {NextFunction, Request, Response} from 'express';

export function extraeVersion(defaultVersion = 1){
    return (req, res, next) => {
        let version = req.headers['x-api-version']
        if(version || version === '0'){
            res.statusCode(400).json({
                error: 'Invalida version del API'
            });
            return;
        }
        if(!version){
            const accept = req.get('accept') || '';
        }
        req.apiVersion = version || defaultVersion;
        next();
    }
}