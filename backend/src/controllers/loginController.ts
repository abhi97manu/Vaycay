import  bcrypt from "bcrypt";
import { Request, Response } from "express";
import { getUsername } from "../services/loginServices.js";
import jwt from "jsonwebtoken";

interface User {
    username: string;
    password: string;
}

export async function loginController(_request: Request, _response: Response) : Promise<void> {
      
      try{

       const {username , password }   = _request.body;   
        
         const user  = await getUsername(username)

         if(!user){
            _response.status(404).json({message: "User not found"});
            return;
         }

         if(!bcrypt.compareSync(password, user.password)){
                _response.status(401).json({message: "Invalid password"});
                return;
        }

        const token = jwt.sign({ username: user.username, role: "admin" }, process.env.JWT_SECRET || "default_secret", { expiresIn: "1h" });
      
        _response.status(200).json({message: "Login successful", token});

}
catch(error){
    console.error("Error during login:", error);
    _response.status(500).json({message: "Internal server error"});
}


}