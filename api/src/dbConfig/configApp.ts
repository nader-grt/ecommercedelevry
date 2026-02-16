import crypto from "crypto";


export const refreshTokenSecret = crypto.randomBytes(32).toString("hex");




export  const BASE_URL = process.env.BASE_URL; // http://localhost:4000