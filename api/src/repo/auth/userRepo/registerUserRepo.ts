import { User } from "../../../models/main";
import userRepoInterface from "./useRepoInterface";


export default class registerUserRepo extends userRepoInterface {


    public  async registerUser(user:any):Promise<void> 
    { 
          
             try {
                
                await  User.create(user)
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

    public static async  IsExistUser(email:string):Promise<boolean>
    {
        


       try {
        
        let user :any =   await  User.findOne( { where: { email: email } } ) ;

        return user ? true : false ;
       } catch (error) {
        
        console.log(error) ;
        return false ;
       }

    }

}