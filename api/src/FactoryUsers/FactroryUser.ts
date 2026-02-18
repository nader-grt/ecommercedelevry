import GetAllUserCOntroller from "../controllers/users/getAllUserController";
import GetProfileUserController from "../controllers/users/GetProfileUserController";
import GetUserByAdminController from "../controllers/users/GetUserByAdminController";
import updateUserByAdminController from "../controllers/users/updateUserByAdminController";
import { userRepo } from "../repo/auth/userRepo/userRepo";
import GetAllUserUseCase from "../useCases/userUseCase/GetAllUserUseCase";
import GetProfileUserUseCase from "../useCases/userUseCase/GetProfileUserUseCase";
import GetUserByAdminUseCase from "../useCases/userUseCase/GetUserByAdminUseCase";
import updateUserByAdminUseCase from "../useCases/userUseCase/updateUserByAdminUseCase";


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

  static GetAllUserController() {
    const repo = new userRepo();

    const useCase = new GetAllUserUseCase(repo);
    return new GetAllUserCOntroller(useCase);
  }
  static UpdateUseByAdminrController() {
    const repo = new userRepo();

    const useCase = new updateUserByAdminUseCase(repo);
    return new updateUserByAdminController(useCase);
  }
}
