import { pool } from "../config/db.js";
import { Destination } from "../config/declratives.js";

export const addDest = async (destination: any) : Promise<boolean>=>{
        if (!pool) return false;
        const {name, region,description,state_id} = destination;
        try{
            const [result] = await pool.query(
                `INSERT INTO destinations (name, region, description, state_id) VALUES (?, ?, ?, ?)`,
                [name, region, description, state_id]
            );

            return Boolean((result as { insertId?: number }).insertId);
        } catch (error) {
           
            throw new Error("unable to add destination");
        }
}

export const addTrips = async (trip :any) : Promise<boolean> =>{
    if (!pool) return false;
    const {name,destination_id, photo, price ,starting_point, ending_point } = trip;

        const [result] = await pool.query(
            `INSERT INTO trips (name, destination_id, starting_point, ending_point, price) values (?,?,?,?,?)`,
            [name,destination_id,starting_point, ending_point, price]
        )

      

       return Boolean((result as { insertId?: number }).insertId);
}


export const getAllDestination = async () : Promise<Destination[]> =>{
    if (!pool) return [];
        const [result] = await pool.query(
            'SELECT * FROM destinations' 
        )
   return result as Destination[]

   
}

export async function getAllStates(): Promise<{ id: number; name: string }[]> {
    if (!pool) return [];
    const [result] = await pool.query('SELECT id, name FROM States ORDER BY name');
    return result as { id: number; name: string }[];
}
