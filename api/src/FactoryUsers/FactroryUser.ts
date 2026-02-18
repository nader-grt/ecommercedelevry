import GetProfileUserController from "../controllers/users/GetProfileUserController";
import GetUserByAdminController from "../controllers/users/GetUserByAdminController";

import { userRepo } from "../repo/auth/userRepo/userRepo";
import GetProfileUserUseCase from "../useCases/userUseCase/GetProfileUserUseCase";
import GetUserByAdminUseCase from "../useCases/userUseCase/GetUserByAdminUseCase";

export class UserControllerFactory {
  static createGetProfileController() {
    const repo = new userRepo();
    const useCase = new GetProfileUserUseCase(repo);
    return new GetProfileUserController(useCase);
  }

  static createGetUserByAdminController() {
    const repo = new userRepo();
 
    const useCase = new GetUserByAdminUseCase(repo);
    return new GetUserByAdminController(useCase);
  }
}
