import { NextFunction, Request, Response } from "express";

export function errorHandler(error: Error, _request: Request, response: Response, _next: NextFunction) {
  
 
  response.status(500).json({
    status : false,
    message: error.message || "Unexpected server error"

  });

}
