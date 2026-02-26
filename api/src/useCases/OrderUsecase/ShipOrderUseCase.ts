import OrderRepo from "../../repo/OrderRepo/OrderRepo";




interface IShipOrderDTO
{
    ordeId:number;
    actor: {
        ownerId: number;
        ownerRole: string;
        ownerEmail?: string;
      };
}

export default class ShipOrderUseCase
{
    private _orderRepo!:OrderRepo
    constructor(orderRepo:OrderRepo )
    {
        this._orderRepo = orderRepo ;
     
    }

           async execute(dto:IShipOrderDTO):Promise<any>
            {

                
            }
}