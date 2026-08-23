import { Request, Response } from "express";
import { addDest } from "../services/adminServices.js";

export const adminDashboard = (_request: Request, _response: Response) : void =>{

}

export const adminAnalytics = (_request: Request, _response: Response) : void =>{

}

export const addDestination = async (_request: Request, _response: Response) : Promise<void>=>{
        const destination = _request.body;
      try{
             const destination_added =  await addDest(destination);
        if(!destination_added)
        {
            _response.status(400).json({message : "Destination not created!"})
        }
        _response.status(201).json({message : "Destination Created!"})
      }  
      catch(error)
      {
        _response.status(500).json({message : "Internal Server Error"})
      }
       

}

export const addTrip = (_request: Request, _response: Response) : void =>{
         
}


