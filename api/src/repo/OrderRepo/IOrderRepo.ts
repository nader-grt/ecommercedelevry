import OrderDomain from "../../models/domain/OrderDomain/OrderDomain";



export default abstract class IOrderRepo {

    protected abstract CreateOrderByAdmin(order:OrderDomain):Promise<any> ;
    protected abstract DeleteOrderByIdAdmin(orderId:number):Promise<any> ;
    protected abstract FindOrderById(orderId:number) :Promise<any> ;
}