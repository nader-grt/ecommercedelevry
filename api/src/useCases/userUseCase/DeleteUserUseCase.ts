import { ActorUserAdmin } from "../../dbConfig/configApp";
import { Role } from "../../models/user";
import { userRepo } from "../../repo/auth/userRepo/userRepo";


interface DeleteUserDTO
{
  userId:number;
  actor:ActorUserAdmin;
}


export default class DeleteUserUseCase {
  private _userepo!: userRepo;
  constructor(deleteusecaseuser: userRepo) {
    this._userepo = deleteusecaseuser;
  }

  async execute(dto:DeleteUserDTO): Promise<any> {
    try {



      console.log("object" ,dto)

      if (dto.actor?.actorRole?.toLowerCase() !== Role.ADMIN.toLowerCase()) {
        return {
          success: false,
          message: "Only admin can delete user",
        };
      }
      const user =     await this._userepo.FindUserById(dto.userId) ;

  

   //   console.log("uuuuuuuuuuuu  ",user )//custmerId
      if(!user)
      {
       return {success:false,message:"user not found"}
      }


          const resultUserDeleted =         await this._userepo.DeleteUser(dto.userId) ;
     
       
          if(resultUserDeleted === 1 )
          {
            //console.log("rrrrrrrrrrr hhhhhhhhh ",resultUserDeleted)
            return {success:true,message:"user deleted with success "}
          }
          
         // return {success:false,message:"user not found"}

    } catch (error) {
      console.log(error);
    }
  }
}
