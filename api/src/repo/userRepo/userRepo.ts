import { User } from "../../models/main";
import IUser from "../../models/user";
import IUserRepoInterface from "./userRepoInterface";

export class userRepo extends IUserRepoInterface {


    public async CreateUser():Promise<void> 
    {


    }

    public async DeleteUser():Promise<void> 
    {

        
    }

  public async FindUserById(id: number): Promise<void> {
    const user: any = await User.findByPk(id);
  }

  public async FindAllUsers(): Promise<IUser[]> {
    const listUsers: IUser[] = await User.findAll();

    return listUsers;
  }

  public static async existUserId(userID: number): Promise<{}> {
    const listUsers: IUser[] = await User.findAll();

    for (const user of listUsers) {
        if(user.id  === userID)
            return user 
    }
    return {};
  }
}
