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
           
            throw error;
        }
}

export const addTrip = async (trip :any) : Promise<void> =>{
    const {name,destination_id, start_date, end_date, photo, price } = trip;

    try{
        
        const [result] = await pool.query(
            `INSERT INTO trips (name, destination_id, start_date, end_date, price)`
        )
    }
}