
import OrderRepo from "../../repo/OrderRepo/OrderRepo"

interface CreateOrderDTO
{


}

export default class CreateOrderUseCase 
{

            private _createorderusecase!:OrderRepo

             constructor(createOrderUseCase:OrderRepo)
             {
                 this._createorderusecase = createOrderUseCase ;
             }

             async  execute(dto:CreateOrderDTO):Promise<any>
             {

                     try {
                        
                     } catch (error) {
                        console.log(error)
                     }
             }
}