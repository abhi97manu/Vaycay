
import axios from 'axios'

const SERVER_URL = import.meta.env.VITE_SERVER_URL;


export async function LoginService(username: string, password: string) {
    console.log("LoginService called with email:", username, "and password:", password);
    try{
       const response = await axios.post(`${SERVER_URL}/api/v1/auth/login`, {
            username,
            password
        } )
       
      
       return response;
    }
    catch(error){
        if(error.response?.status === 401){
           
            return {
                message: "Invalid password",
                status: 401
            };
        
            };

             if(error.response?.status === 404){
           
            return {
                message: "User not available",
                status: 401
            };
        
            };



            throw error;
        }
      
      
    
}