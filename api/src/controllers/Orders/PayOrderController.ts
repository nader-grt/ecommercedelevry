import { Request, Response } from "express";
import { BaseController } from "../../infra/BaseCOntroller";
import PayOrderUseCase from "../../useCases/OrderUsecase/PayOrderUseCase";


export default class PayOrderController extends BaseController
{


    private _payOrderUseCase!:PayOrderUseCase
         constructor(payOrderUseCase:PayOrderUseCase)
         {super()

            this._payOrderUseCase = payOrderUseCase ;
         }
     protected async executeImpl(req: Request, res: Response): Promise<any> {
                  
                  const {paidAmount} = req.body
                  try {
                    
                  } catch (error) {//POST /orders/:orderId/pay
                    console.log(error)
                  }
     }
}