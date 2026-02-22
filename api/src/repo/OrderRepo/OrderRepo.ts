import OrderDomain from "../../models/domain/OrderDomain/OrderDomain";
import IOrderRepo from "./IOrderRepo";





export default class OrderRepo extends IOrderRepo
{

   public async CreateOrderByAdmin(order:OrderDomain):Promise<any> 
   {


                     console.log("order ",order)
                    try {
                        
                    } catch (error) {
                        console.log(error)
                    }
   }
    
}