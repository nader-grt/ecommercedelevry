import { Request, Response } from "express";
import { BaseController } from "../../infra/BaseCOntroller";
import { User } from "../../models/main.js";

interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export default class createUserController extends BaseController {
  private _user: IUser = { firstName: "", lastName: "", email: "", phone: "" };

  protected async _ReadUser(user: IUser): Promise<IUser> {
    if (!user.firstName || !user.lastName || !user.email) {
      throw new Error("Missing required fields");
    }

    return user;
  }

  protected async executeImpl(req: Request, res: Response): Promise<any> {
    const { firstName, lastName, email, phone } = req.body;

    this._user = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
    };

    try {
      if (Object.keys(this._user).length === 0) {
        return this.notFound(res);
      }

      const validatedUser: IUser | any = await this._ReadUser(this._user);

      const createdUser = await User.create(validatedUser);

      return this.ok(res, {
        message: "User created successfully ok ",
        user: createdUser,
      });
    } catch (error: any) {
      console.error(error);

      if (error.message === "Missing required fields") {
        return this.fail(res, "Failed to create user: " + error.message);
      }
    }
  }
}
