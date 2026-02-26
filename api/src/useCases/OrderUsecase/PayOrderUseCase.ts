import { userRepo } from "../../repo/auth/userRepo/userRepo";
import OrderRepo from "../../repo/OrderRepo/OrderRepo";

interface IPaidOrderDTO
{
    orderId:number ;
    paidAmount:number ;
    actor: {
        ownerId: number;
        ownerRole: string;
        ownerEmail?: string;
      };
}

export default class PayOrderUseCase
{
    private _userRepo!:userRepo
    private _orderRepo!:OrderRepo
    constructor( userrepo  :userRepo,orderRepo:OrderRepo )
    {
        this._orderRepo = orderRepo ;
        this._userRepo = userrepo ;
     
    }

           async execute(dto:IPaidOrderDTO):Promise<any>
            {


            }
}