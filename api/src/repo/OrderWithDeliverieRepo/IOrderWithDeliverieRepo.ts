

export default abstract class IOrderWithDeliverieRepo {

  protected abstract CreateOrderWithDeliver(OrderWithDeliver:any,t:any):Promise<any>;

    
}