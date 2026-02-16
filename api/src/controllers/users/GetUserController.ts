import { Request, Response } from "express";
import { BaseController } from "../../infra/BaseCOntroller";
import GetUserUseCase from "../../useCases/userUseCase/GetUserUseCase";
import { RequestAuth } from "../../middleware/verifyToken";
import { Role } from "../../models/user";

interface IGetUser {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  city?: string;
  address?: string;
}

export default class GetUserController extends BaseController {
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
  private _usecasegetUser!: GetUserUseCase;
  constructor(usecasegetUser: GetUserUseCase) {
    super();

    this._usecasegetUser = usecasegetUser;
  }

  protected async executeImpl(req: RequestAuth, res: Response): Promise<any> {
    const id = req.params?.id;
    const userId: number = Number(id);
    const currentUserRole: Role | undefined = req.user?.role;

    const result = await this._usecasegetUser.execute({
      userId,
      currentUserRole,
    });
    try {
      if (!result.success) {
        return this.fail(res, result.message);
      }

     // console.log("result.user   ", result.user);
      const user = await this.getUser(result.user[0]);

      return this.resultValue(res, " get user with success  ", user);
    } catch (error) {
      console.log(error);
    }
  }
}
