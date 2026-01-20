import { Request, Response } from "express";
import { BaseController } from "../../infra/BaseCOntroller";
import userDomain from "../../models/domain/auth/user/userDomain";

import { Role } from "../../models/user";
import { createToken } from "../../middleware/createToken";
import UserRepo from "../../repo/auth/userRepo/registerUserRepo";

export interface IRegisterUserRequestDTO {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  password: string;
  city: string;
  address: string;
  role?: string | any;
}

export default class RegisterController extends BaseController {
  private _userDomain: userDomain; // prepare from request body
  private _UserRepo: UserRepo; // db repo to save user data

  private async _ReadUser(
    userDomainRequest: IRegisterUserRequestDTO
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
      role: (this._userDomain.setRole = userDomainRequest.role    ),//Role.USER
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
    this._UserRepo = new UserRepo();
  }

  protected async executeImpl(req: Request, res: Response): Promise<any> {
    const { firstName, lastName, phone, email, password, city, address,role } =
      req.body;

    // console.log("object \t ",{ firstName, lastName, phone, email, password, city, address })
             console.log("reqqqqqqqqqqqqqq",req,"///////////////// \n \n")
    const dtoUser: any = {
      firstName,
      lastName,
      phone,
      email,
      password,
      city,
      address,
      role
    };

    try {
      const user = await this._ReadUser(dtoUser);
      const isExistUser: any = await UserRepo.IsExistUser(
        dtoUser.email
      );

      console.log("user readed \t ", user, "isExistUser   ", isExistUser);
      if (isExistUser) {
        this.conflict(res, "User already exists with this email");
        return;
      }

   

    const resultUser =  await this._UserRepo.registerUser(user);


    const isExistUseremail: any = await this._UserRepo.FindUserByEmail(
      dtoUser.email
    );
    console.log(resultUser,"******************************end",isExistUser,"isExistUseremail \n*******",isExistUseremail.id)

    //FindUserByEmail
    let token: any
    if(isExistUseremail.id)
    {
      token = createToken(user.email, user.role,isExistUseremail.id);
    }

       

      this.ok(res, { message: "User registered successfully", token });
    } catch (error) {
      console.log(error);
    }
  }
}
