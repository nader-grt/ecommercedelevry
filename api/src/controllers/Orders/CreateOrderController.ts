import { Request, Response } from "express";
import { BaseController } from "../../infra/BaseCOntroller";
import CreateOrderUseCase from "../../useCases/OrderUsecase/CreateOrderUseCase";
import { RequestAuth } from "../../middleware/verifyToken";
import generateAccessToken from "../../middleware/generateAccessToken";
import { refreshTokenSecret } from "../../dbConfig/configApp";
import { Role } from "../../models/user";



export default class CreateOrderController extends BaseController
{


               private _createOrderUseCase!:CreateOrderUseCase
          constructor(createOrderUseCase:CreateOrderUseCase)
          {super() ;

               this._createOrderUseCase = createOrderUseCase ;
          } 

          protected  async executeImpl(req: RequestAuth, res: Response): Promise<any> {
              
                                    const {items}  = req.body ;
                               
                                 
                                   const actor = {
                                        ownerId: req.user!.id,
                                        ownerRole: req.user!.role
                                   };

                                   const customerId = req.params.customerId
                                        ? Number(req.params.customerId)
                                        : actor.ownerId;


                              try {

                                   const dto = {
                                        custmerId:Number(customerId),
                                        items,
                                        actor
                                   }
                                   await this._createOrderUseCase.execute(dto)

                                
                                return this.ok(res,"any order  ")
                              } catch (error) {
                                console.log(error)
                              }
          }
}