import DeleteUserController from "../controllers/users/DeleteUserController";
import GetAllUserCOntroller from "../controllers/users/getAllUserController";
import GetProfileUserController from "../controllers/users/GetProfileUserController";
import GetUserByAdminController from "../controllers/users/GetUserByAdminController";
import updateProfileUserController from "../controllers/users/updateProfileUserController";
import updateUserByAdminController from "../controllers/users/updateUserByAdminController";
import { userRepo } from "../repo/auth/userRepo/userRepo";
import DeleteUserUseCase from "../useCases/userUseCase/DeleteUserUseCase";
import GetAllUserUseCase from "../useCases/userUseCase/GetAllUserUseCase";
import GetProfileUserUseCase from "../useCases/userUseCase/GetProfileUserUseCase";
import GetUserByAdminUseCase from "../useCases/userUseCase/GetUserByAdminUseCase";
import updateUserByAdminUseCase from "../useCases/userUseCase/updateUserByAdminUseCase";
import UpdateUserProfileUseCase from "../useCases/userUseCase/UpdateUserProfileUseCase";


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
  static UpdateUserByAdminrController() {
    const repo = new userRepo();

    const useCase = new updateUserByAdminUseCase(repo);
    return new updateUserByAdminController(useCase);
  }

  static UpdateProfileUserrController() {
    const repo = new userRepo();

    const useCase = new UpdateUserProfileUseCase(repo);
    return new  updateProfileUserController(useCase);
  }

  static DeleteUserrController() {
    const repo = new userRepo();

    const useCase = new DeleteUserUseCase(repo);
    return new  DeleteUserController(useCase);
  }
}
