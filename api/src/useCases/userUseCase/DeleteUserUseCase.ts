import { userRepo } from "../../repo/auth/userRepo/userRepo";

export default class DeleteUserUseCase {
  private _userepo!: userRepo;
  constructor(deleteusecaseuser: userRepo) {
    this._userepo = deleteusecaseuser;
  }

  async execute(): Promise<any> {
    try {
    } catch (error) {
      console.log(error);
    }
  }
}
