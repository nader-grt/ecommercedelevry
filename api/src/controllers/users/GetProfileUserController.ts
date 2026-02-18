import { Request, Response } from "express";
import { BaseController } from "../../infra/BaseCOntroller";
import GetProfileUserUseCase from "../../useCases/userUseCase/GetProfileUserUseCase";
import { RequestAuth } from "../../middleware/verifyToken";



//GetUserController
export default class GetProfileUserController extends BaseController
{




            private  _getProfileUser!:GetProfileUserUseCase
               constructor(getProfileUserUseCase:GetProfileUserUseCase)
               {super()

                    this._getProfileUser = getProfileUserUseCase
               }
       protected async executeImpl(req: RequestAuth, res: Response): Promise<any> {
           

              const userId = Number(req.user!.id);

              const result = await this._getProfileUser.execute(userId);
          
              try {
              if (!result.success) {
                return this.fail(res, result.message);
              }
          
              return this.resultValue(res, "profile fetched", {
                firstName: result.user.firstName,
                lastName: result.user.lastName,
                email: result.user.email,
                phone: result.user.phone,
              });
            } catch (err) {
              return this.fail(res, "unexpected error");
            }
       }
}