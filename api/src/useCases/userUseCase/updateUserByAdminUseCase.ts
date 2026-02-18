import { ActorUserAdmin } from "../../dbConfig/configApp";
import { userRepo } from "../../repo/auth/userRepo/userRepo";



interface IUpdateUserByAdminDTO {
    custmerId?: number;
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    phone: string;
    city: string;
    role?: string;
    actor?: ActorUserAdmin;
  }


export default class updateUserByAdminUseCase
{


    private _updateuserByAdmincaseUserRepo!: userRepo;
    constructor(updateusercaseUserRepo: userRepo) {
      this._updateuserByAdmincaseUserRepo = updateusercaseUserRepo;
    }


                 async execute(dto:IUpdateUserByAdminDTO):Promise<any>
                 {

                              try {
                                


                                const user =     await this._updateuserByAdmincaseUserRepo.FindUserByEmail(dto.email)  ;

  
                                if(!user)
                                {
                                 return {success:false,message:"user not found"}
                                }
                         
                         
                                return {success:false,message:"user not found111"}


                              } catch (error) {
                                console.log(error)
                              }

                 }
}