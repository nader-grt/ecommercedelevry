import { Role } from "../models/user";
import jwt from "jsonwebtoken";

export default async function   generateAccessToken(email:string,role:Role,  id:number ):Promise<any> {
  // Implementation for generating access token

    const payload = {
        email: email,
        role: role,
        id:id ,
    };

    return await jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET as string)
  
}