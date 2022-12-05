import {NextFunction, Request, Response } from 'express';
import { Injectable, NestMiddleware } from "@nestjs/common";

@Injectable()
export class ValidateCustomerMiddleware implements NestMiddleware{
    use(req: Request, res: Response, next:NextFunction) {
        console.log("this is the new middleware validator");
        const { authorization} = req.headers;
        if(!authorization)
            return res.status(403)
            .send({ error:"No Authentication Token Provided"});
        next();

        if(authorization === '123'){
            next();
        }
        else{
            return res
                .status(403)
                .send({error:"Invalid Authentication Team Provided."})
        }
    }
}