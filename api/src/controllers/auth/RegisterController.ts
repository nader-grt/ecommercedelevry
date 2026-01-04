import { Request, Response } from "express";
import { BaseController } from "../../infra/BaseCOntroller";
import userDomain from "../../models/domain/auth/user/userDomain";
import registerUserRepo from "../../repo/auth/userRepo/registerUserRepo";
import { Role } from "../../models/user";
import { createToken } from "../../middleware/createToken";

export interface RegisterUserRequestDTO {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  password: string;
  city: string;
  address: string;
  role?: Role;
}

export default class RegisterController extends BaseController {
  private _userDomain: userDomain; // prepare from request body
  private _registerUserRepo: registerUserRepo; // db repo to save user data

  private async _ReadUser(
    userDomainRequest: RegisterUserRequestDTO
  ): Promise<any> {
    let userPasswordHashed: any = new userDomain();

    userPasswordHashed.password = await userDomain.hashPassword(
      userDomainRequest.password
    );

    return {
      firstName: (this._userDomain.setFirstName = userDomainRequest.firstName),
      lastName: (this._userDomain.setLastName = userDomainRequest.lastName),
      phone: (this._userDomain.setPhone = userDomainRequest.phone),
      email: (this._userDomain.setEmail = userDomainRequest.email),
      password: userPasswordHashed.password, // ,
      city: (this._userDomain.setCity = userDomainRequest.city),
      role: (this._userDomain.setRole = Role.USER),
      address: (this._userDomain.setAddress = userDomainRequest.address),
    };

    /*  return {
                  firstName : userDomain.firstName,
                  lastName : userDomain.lastName,
                  phone : userDomain.phone,
                  email : userDomain.email,
                  password : userDomain.password,
                  city : userDomain.city,
                  role: Role.USER,
                  address : userDomain.address
            }*/
  }

  constructor() {
    super();
    this._userDomain = new userDomain();
    this._registerUserRepo = new registerUserRepo();
  }

  protected async executeImpl(req: Request, res: Response): Promise<any> {
    const { firstName, lastName, phone, email, password, city, address } =
      req.body;

    // console.log("object \t ",{ firstName, lastName, phone, email, password, city, address })

    const dtoUser: any = {
      firstName,
      lastName,
      phone,
      email,
      password,
      city,
      address,
    };

    try {
      const user = await this._ReadUser(dtoUser);
      const isExistUser: any = await registerUserRepo.IsExistUser(
        dtoUser.email
      );

      console.log("user readed \t ", user, "isExistUser   ", isExistUser);
      if (isExistUser) {
        this.conflict(res, "User already exists with this email");
        return;
      }

      let token: any = createToken(user.email, user.role);

      await this._registerUserRepo.registerUser(user);

      this.ok(res, { message: "User registered successfully", token: token });
    } catch (error) {
      console.log(error);
    }
  }
}
