import { Request, Response } from "express";
import { BaseController } from "../../infra/BaseCOntroller";




export default class AssignDeliveryController extends BaseController
{

      protected  async executeImpl(req: Request, res: Response): Promise<any> {
                       
                        const { deliveryId } = req.params;
                        const { deliveryPersonId } = req.body;
      }
}