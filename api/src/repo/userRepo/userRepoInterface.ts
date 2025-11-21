import IUser from "../../models/user";


export  default abstract class IUserRepoInterface
{

    public  abstract  FindUserById(userId:number):Promise<void> ;
    public abstract   FindAllUsers():Promise<IUser[]> ;

}