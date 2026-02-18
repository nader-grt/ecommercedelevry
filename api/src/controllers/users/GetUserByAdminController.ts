import { Request, Response } from "express";
import { BaseController } from "../../infra/BaseCOntroller";

import { RequestAuth } from "../../middleware/verifyToken";

import GetUserByAdminUseCase from "../../useCases/userUseCase/GetUserByAdminUseCase";
import { ActorUserAdmin } from "../../dbConfig/configApp";

interface IGetUser {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  city?: string;
  address?: string;
}

export default class GetUserByAdminController extends BaseController {
  async getUser(user: any): Promise<IGetUser> {
    return {
      firstName: user.firstName,
      lastName: user.lastName,
      phone: user.phone,
      email: user.email,
      city: user.city,
      address: user.address,
    };
  }




  private _getUserByAdminUseCase!:GetUserByAdminUseCase
  constructor(getUserByAdminUseCase:GetUserByAdminUseCase) {
    super();
    this._getUserByAdminUseCase = getUserByAdminUseCase
  }
  protected async executeImpl(req: RequestAuth, res: Response): Promise<any> {

                     try {
      const targetUserId = Number(req.params.id);

      const actor: ActorUserAdmin = {
        actorId: Number(req.user!.id),
        actorEmail: req.user!.email,
        actorRole: req.user!.role,
      };

      const result = await this._getUserByAdminUseCase.execute({
        userId: targetUserId,
        actor,
      });

      if (!result.success) {
        return this.fail(res, result.message);
      }

      return this.resultValue(res, "user fetched", {
        firstName: result.user.firstName,
        lastName: result.user.lastName,
        email: result.user.email,
        phone: result.user.phone,
        city: result.user.city,
        address: result.user.address,
      });
    } catch (err) {
      return this.fail(res, "unexpected error");
    }


  }
}
