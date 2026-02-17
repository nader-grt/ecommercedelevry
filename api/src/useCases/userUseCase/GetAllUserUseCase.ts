import { userRepo } from "../../repo/auth/userRepo/userRepo";

export default class GetAllUserUseCase {
  private _usecaseUserRepo!: userRepo;
  constructor(usecaseUseRepo: userRepo) {
    this._usecaseUserRepo = usecaseUseRepo;
  }

  async execute(): Promise<any> {}
}
