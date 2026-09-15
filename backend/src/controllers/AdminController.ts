import { NextFunction, Request, Response } from "express";
import { addDest,addTrips } from "../services/adminServices.js";


interface Destination {
  name : string,
  region : string,
  state_id : number,
  description : string
}
interface Trip {
  name: string ,
  destination_id : number,
  photo : string,
  starting_point : string,
  ending_point : string,
  price : number,

}

export const adminDashboard = (_request: Request, _response: Response): void => {

}

export const adminAnalytics = (_request: Request, _response: Response): void => {

}

export const addDestination = async (_request: Request, _response: Response): Promise<void> => {
  const destination : Destination = _request.body;
  try {
    const destination_added = await addDest(destination);
    if (!destination_added) {
      _response.status(400).json({ message: "Destination not created!" })
    }
    _response.status(201).json({ message: "Destination Created!" })
  }
  catch (error) {
    _response.status(500).json({ message: "Internal Server Error" })
  }


}

export const addTrip = async (_request: Request, _response: Response, _next: NextFunction): Promise<void> => {
  const trip: Trip   = _request.body;

  try{
    const trip_added = await addTrips(trip);
    _response.status(200).json({ message: "Trip created !!"})
  }
  catch(err)
  {
    _next(err);
  }

}


