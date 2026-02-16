import { User } from "../../../models/main";
import { Role } from "../../../models/user";
import IUserResponse from "../../userRepo/userRepo";
import userRepoInterface from "./useRepoInterface";


export interface IUserRegister
{
  id?: number;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
password:string ;
  role?: Role;
  city?: string;
  address?: string;

}

export default class UserRepo extends userRepoInterface {


    public  async registerUser(user:IUserRegister):Promise<any> 
    { 
          
             try {
                
              const createdUser = await User.create(user);  
              return createdUser; 
             } catch (error) {
                console.log(error) ;
                
             }
    }
    public  async FindUserByEmail(email:string):Promise<any> 
    { 
          
       try {
        return   await  User.findOne( { where: { email: email } } ) ;
        
       } catch (error) {
        
       }
    }

    public  async  IsExistUser(email:string):Promise<boolean>
    {
        


       try {
        
        let user :any =   await  User.findOne( { where: { email: email } } ) ;

        return user ? true : false ;
       } catch (error) {
        
        console.log(error) ;
        return false ;
       }

    }

    public async getUserById(id: number): Promise<any> {
      try {
        const user = await User.findOne({
          where: {
            id: id
          },
        });
    
        return user; // null
      } catch (error) {
        console.error(error);
        throw error;
      }
    }
    //employeeId

}