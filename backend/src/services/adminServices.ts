import { pool } from "../config/db.js";

export const addDest = async (destination: any) : Promise<boolean>=>{
        const {name, region,description,state_id} = destination;
        try{
            const [result] = await pool.query(
                `INSERT INTO destinations (name, region, description, state_id) VALUES (?, ?, ?, ?)`,
                [name, region, description, state_id]
            );

            if(result.length === 0)
            {
                return false;
            }
            return true;
        } catch (error) {
           
            throw new Error("unable to add destination");
        }
}

export const addTrips = async (trip :any) : Promise<boolean> =>{
    const {name,destination_id, photo, price ,starting_point, ending_point } = trip;

        const [result] = await pool.query(
            `INSERT INTO trips (name, destination_id, starting_point, ending_point, price) values (?,?,?,?,?)`,
            [name,destination_id,starting_point, ending_point, price]
        )

       if(result.length ===0)
       {
        throw new Error ("unable to add Trips")
       }
}