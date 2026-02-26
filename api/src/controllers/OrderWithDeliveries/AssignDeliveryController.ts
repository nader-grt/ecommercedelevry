import { Request, Response } from "express";
import { BaseController } from "../../infra/BaseCOntroller";
import AssignDeliveryUseCase from "../../useCases/OrderWithDeliveriesUseCase/AssignDeliveryUseCase";




export default class AssignDeliveryController extends BaseController
{
                  private _assignDeliveryUseCase!:AssignDeliveryUseCase;
                  constructor(assignDeliveryUseCase:AssignDeliveryUseCase)
                  {super()

                        this._assignDeliveryUseCase = assignDeliveryUseCase ;
                  }
      protected  async executeImpl(req: Request, res: Response): Promise<any> {
                       
                        const { deliveryId } = req.params;
                        const { deliveryPersonId } = req.body;

                        try {
                              
                        } catch (error) {
                              console.log(error)
                        }
      }
}