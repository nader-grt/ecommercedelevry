import { Role } from "../../models/user";
import { userRepo } from "../../repo/auth/userRepo/userRepo";

interface IUpdateUserDTO {
  custmerId?: number;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  phone: string;
  city: string;
  role?: string;
  actor?: any;
}

/**
 {
        actorId:number,
        actorEmail:string,
        actorRole:string
    }
 */

export default class UpdateUserUseCase {
  private _usecaseUserRepo!: userRepo;
  constructor(usecaseUserRepo: userRepo) {
    this._usecaseUserRepo = usecaseUserRepo;
  }

  async execute(dto: IUpdateUserDTO):Promise<{success:boolean,message:string}> {
    try {
      console.log("dddddddddddd update user *** ", dto);

       const user =     await this._usecaseUserRepo.FindUserByEmail(dto.email)  ;

       console.log(!user,"uuuuuuuuuuuuuu  ",user)
       if(!user)
       {
        return {success:false,message:"user not found"}
       }


       return {success:false,message:"user not found"}
    } catch (error) {
      console.log(error);
      return {success:false,message:"internal server error"};
    }
  }
}
