import { BaseController } from "../../infra/BaseCOntroller";
import { Request, Response } from "express";
import CancelOrderByUserUseCase from "../../useCases/OrderUsecase/CancelOrderByUserUseCase";

export default class CancelOrderByUserController extends BaseController {
  private _cancelOrderByUserUseCase!: CancelOrderByUserUseCase;
  constructor(cancelOrderByUserUseCase: CancelOrderByUserUseCase) {
    super();

    this._cancelOrderByUserUseCase = cancelOrderByUserUseCase;
  }

  protected async executeImpl(req: Request, res: Response): Promise<any> {
    try {
    } catch (error) {
      console.log(error);
    }
  }
}
