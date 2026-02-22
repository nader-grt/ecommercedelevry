import OrderDomain from "../../models/domain/OrderDomain/OrderDomain";



export default abstract class IOrderRepo {

    protected abstract CreateOrderByAdmin(order:OrderDomain):Promise<any> ;
    
}