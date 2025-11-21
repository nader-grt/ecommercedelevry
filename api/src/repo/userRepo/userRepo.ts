import { User } from "../../models/main";
import IUser from "../../models/user";
import IUserRepoInterface from "./userRepoInterface";


export class userRepo  extends IUserRepoInterface{


    public  async FindUserById(id:number):Promise<void>
    {


    }


    public async FindAllUsers():Promise<IUser[]>
    {

        const listUsers:IUser[]  = await User.findAll()  ;


        return listUsers ;
    }


    public static async existIdUser():Promise<void>
    {


    }
}