
import OrderRepo from "../../repo/OrderRepo/OrderRepo"

interface CreateOrderDTO
{

custmerId:number;
items:[];
actor:{
    ownerId:number ;
    ownerRole:string;
    ownerEmail?:string;
};
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
                        
                        console.log("dddddddddd  ",dto)
                     } catch (error) {
                        console.log(error)
                     }
             }
}