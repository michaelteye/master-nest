import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class validateCustomerAccountMiddleware implements
NestMiddleware{
    use(req:Request, res:Response, next: NextFunction){
        const { validAccount } = req.headers;
        console.log('ValidateCustomerAccount')
        if(validAccount){
            next();
        }
        else{
            res.status(403).send({error: 'Account is Invalid'});
        }

    }
}