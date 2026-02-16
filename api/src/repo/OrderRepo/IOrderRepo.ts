import OrderDomain from "../../models/domain/OrderDomain/OrderDomain";



export default abstract class IOrderRepo {

    protected abstract CreateOrder(order:OrderDomain):Promise<any> ;
    
}