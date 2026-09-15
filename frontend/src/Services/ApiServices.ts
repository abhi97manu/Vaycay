
import axios from 'axios'

const SERVER_URL = import.meta.env.VITE_SERVER_URL;
console.log(SERVER_URL)

export async function LoginService(username: string, password: string) {
    //console.log("LoginService called with email:", username, "and password:", password);
    try{
       const response = await axios.post(`${SERVER_URL}/api/v1/auth/login`, {
            username,
            password
        } )
    
       return response;
    }
    catch(error){
      
          throw error;
        }
      
      
    
}