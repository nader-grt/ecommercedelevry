import { Request, Response } from "express";
import { BaseController } from "../../infra/BaseCOntroller";
import CreateOrderUseCase from "../../useCases/OrderUsecase/CreateOrderUseCase";



export default class CreateOrderController extends BaseController
{


               private _createOrderUseCase!:CreateOrderUseCase
          constructor(createOrderUseCase:CreateOrderUseCase)
          {super() ;

               this._createOrderUseCase = createOrderUseCase ;
          } 

          protected  async executeImpl(req: Request, res: Response): Promise<any> {
              
                                    const {}  = req.body ;


                              try {

                                
                                
                              } catch (error) {
                                
                              }
          }
}