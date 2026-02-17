import { Request, Response } from "express";
import { BaseController } from "../../infra/BaseCOntroller";
import UpdateOrderUseCase from "../../useCases/OrderUsecase/UpdateOrderUseCase";
import Joi from "joi";




export default class UpdateOrderController extends BaseController
{

              private _updateOrderUseCase!:UpdateOrderUseCase
              constructor(updateOrderUseCase:UpdateOrderUseCase)
              {super() ;

                  this._updateOrderUseCase = updateOrderUseCase ;
              } 
            protected async executeImpl(req: Request, res: Response): Promise<any> {
                             
                               
           



                                  try {
                                    
                                  } catch (error) {
                                    
                                  }
            }
}