import { Request, Response } from "express";
import { BaseController } from "../../infra/BaseCOntroller";
import ShipOrderUseCase from "../../useCases/OrderUsecase/ShipOrderUseCase";




export default class ShipOrderController extends BaseController
{
               private _shipOrderUseCase!:ShipOrderUseCase
          constructor(shipOrderUseCase:ShipOrderUseCase)
          {super()

            this._shipOrderUseCase = shipOrderUseCase ;
          }
      protected async executeImpl(req: Request, res: Response): Promise<any> {
          

                 
      }
}