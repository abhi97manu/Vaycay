import {pool} from "../config/db.js";

interface User {
    username: string;
    password: string;
}

if(!pool){
    throw new Error("Database connection pool is not initialized.");
}

export async function getUsername(username: string): Promise<User | null> {
  
    try{
           const [result] = await pool.query<User[]>(
    "SELECT username, password FROM users WHERE username = ?",
    [username]
  );  

    if(result.length === 0){

      return null ;
       
    }

  return result[0];
    }
    catch(error){
        console.error("Error fetching user from database:", error);
        throw error; // Rethrow the error to be handled by the caller
    }
  
    
}