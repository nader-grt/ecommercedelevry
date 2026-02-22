import OrderRepo from "../../repo/OrderRepo/OrderRepo";
import { userRepo } from "../../repo/auth/userRepo/userRepo";

interface CreateOrderDTO {
  custmerId: number;
  items: [];
  actor: {
    ownerId: number;
    ownerRole: string;
    ownerEmail?: string;
  };
}

export default class CreateOrderByUserUseCase {
  private _createorderusecase!: OrderRepo;
  private _useRepo!: userRepo;
  constructor(createOrderUseCase: OrderRepo, user: userRepo) {
    this._createorderusecase = createOrderUseCase;
    this._useRepo = user;
  }

  async execute(dto: CreateOrderDTO): Promise<any> {
    try {
      console.log("dddddddddd  ", dto);
      const custmer = await this._useRepo.FindUserById(Number(dto.custmerId));

      console.log("ccccccccccccustmer ", custmer);
    } catch (error) {
      console.log(error);
    }
  }
}
