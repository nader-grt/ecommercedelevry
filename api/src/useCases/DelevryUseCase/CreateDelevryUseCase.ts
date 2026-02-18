import { userRepo } from "../../repo/auth/userRepo/userRepo";
import DeleveryRepo from "../../repo/delevryRepo/DeleveryRepo";


export default class CreateDelevryUseCase 
{
   protected _deleveryUseCaseRepo!: DeleveryRepo;


  protected _userUseCaseRepo!: userRepo;
              constructor(deleveryRepo:DeleveryRepo,useRepo:userRepo)
              {
                        this._deleveryUseCaseRepo = deleveryRepo ;
                        this._userUseCaseRepo = useRepo ;
              }

              async execute():Promise<any>
              {

                           try {
                            /**
                             * 
                             *  userIsDelevry = await this._DeleveryRepo.getUserDelevredById(
        delevryIdEmp
      );
                             */
                           } catch (error) {
                              console.log(error)
                           }
              }
}