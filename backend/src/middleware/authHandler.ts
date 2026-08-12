import { NextFunction, Request, Response } from "express";
import { env } from "../config/env.js";
import jwt from 'jsonwebtoken';


export function authHandler(_request: Request, _response: Response, next: NextFunction) {
        const authHeader = _request.headers.authorization;
        const token = authHeader?.split(" ")[1];
        if(!token){
            return _response.status(401).json({status : true, message: "Unauthorized" });
        }

        const role = jwt.verify(token,env.jwtsecret);
        if(role !== "admin"){
            return _response.status(403).json({status : true, message: "Forbidden" });
        }
       
        next();
}