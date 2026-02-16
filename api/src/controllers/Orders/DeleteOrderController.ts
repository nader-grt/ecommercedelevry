
import { BaseController } from "../../infra/BaseCOntroller";
import { Request, Response } from "express";
import DeleteOrderUseCase from "../../useCases/OrderUsecase/DeleteOrderUseCase";




export default class DeleteOrderController extends BaseController
{

            private _deleteOrderUseCase!:DeleteOrderUseCase
            constructor(deleteOrderUseCase:DeleteOrderUseCase)
            {super() ;

                this._deleteOrderUseCase = deleteOrderUseCase ;
            } 


           protected async executeImpl(req: Request, res: Response): Promise<any> {
               

                                try {
                                    
                                } catch (error) {
                                    console.log(error)
                                }
           }
}