import { Request, Response } from "express";
import { BaseController } from "../../infra/BaseCOntroller";
import { RequestAuth } from "../../middleware/verifyToken";




export default class StartDeliveryOrderController extends BaseController
{

      protected  async executeImpl(req: RequestAuth, res: Response): Promise<any> {
          

        const { deliveryId } = req.params;
        const delivererId = req.user?.id;
      }
}