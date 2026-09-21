
import axios from 'axios'
import {env} from '../config/constants'

const SERVER_URL = env.SERVER_URL;
console.log(SERVER_URL)


 interface Destination {
    name : string,
    REGION :   string,
    state_id : number,
    description : string,

 }
interface apiResult<T> {
    status : boolean,
    message : string,
    data? : T 
}

export async function LoginService(username: string, password: string) {
    //console.log("LoginService called with email:", username, "and password:", password);
    try{
       const response = await axios.post(`${SERVER_URL}/auth/login`, {
            username,
            password
        } )
    
       return response;
    }
    catch(error){
      
          throw error;
        }
      
      
    
}


export async function getDestination(id? : number) : Promise<apiResult<Destination>>{
        try{
            console.log({SERVER_URL});
            const result = await axios.get<apiResult<Destination>>(`${SERVER_URL}/admin/destinations`)

            if(result.data.status === false)
                {
                    console.log("errr", result.data.message)
                } 
            return result.data;
        }
    catch(err){
        console.log("Error", err)
        return {status : false, message : "Server Error" }
    }
}