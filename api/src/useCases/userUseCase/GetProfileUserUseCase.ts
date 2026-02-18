import { userRepo } from "../../repo/auth/userRepo/userRepo";





export default class GetProfileUserUseCase
{
    private _usecaseUseRepo!: userRepo;
    constructor(useusecaseuser: userRepo) {
      this._usecaseUseRepo = useusecaseuser;
    }
  
    async execute(userId: number): Promise<any> 
    {
      
         try {
            
         } catch (error) {
            console.log(error)
         }

      }
}