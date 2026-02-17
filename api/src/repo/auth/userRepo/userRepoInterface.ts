import IUser from "../../../models/user";
import IUserResponse from "./userRepo";

export default abstract class IUserRepoInterface {
  protected abstract FindUserById(
    userId: number
  ): Promise<IUserResponse | null>;
  //  protected abstract   FindAllUsersByRoleIsUser(role:string):Promise<any> ;
  //  protected abstract CreateUser():Promise<void> ;
  protected abstract DeleteUser(userid?: number): Promise<void>;
  protected abstract updateUser(user: any, userid?: number): Promise<any>;
}
