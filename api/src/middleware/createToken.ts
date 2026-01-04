
import jsonwebtoken  from 'jsonwebtoken';
import { Role } from '../models/user';


export function createToken(email:string,role:Role): string {


    const payload = {
        email: email,
        role: role
        };

    const token :any =    jsonwebtoken.sign(payload,process.env.JWT_SECRET as string,)


return token;

  //  return jsonwebtoken.sign(payload, secret, options);
}
