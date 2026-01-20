import { Request, Response, NextFunction } from 'express';
import { Role } from '../models/user';
import jwt from 'jsonwebtoken' ;
import extractIdFromUser from './extractIdFromUser';

export  interface RequestAuth extends Request {
    user?:{
    
        email:string ;
        role:Role ;
        id:number ;
    }
}



export  function  verifyToken(req:RequestAuth, res:Response, next:NextFunction):any{

    console.log("resquest headers:****\t nader",req.headers.authorization) ;

    const authHeader = req.headers.authorization ;

    const token:any = authHeader?.split(' ')[1]

    if(!token)
    {
        return res.status(401).json({message:"Access Denied. No token provided"}) ;
    }
       const decoded :any =       jwt.verify(token, process.env.JWT_SECRET!)
       console.log("11111111111\t ",typeof decoded.role)
         req.user = {
          email:decoded.email ,
          role:decoded.role,
          id: decoded.id
         }

         console.log("222222222222222222222222",   req.user  ,"333333333333333333333   ",decoded.id )
          extractIdFromUser(decoded.id) ;
            next() ;


    //return "not implemented" ;
}