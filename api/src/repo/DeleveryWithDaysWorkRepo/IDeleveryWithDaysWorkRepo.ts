

export default abstract class IDeleveryWithDaysWorkRepo
{
    protected abstract CreateDeleveryWithDaysWork(DeleveryDay :any ,deleveryId?:number):Promise<any>;
    protected abstract GetDeliveryInfo():Promise<any> ;
    protected abstract UpdateDeleveryWithDaysWork(updatedeliveryDay :any ,deleveryId_dayworkId?:number):Promise<any>;

    protected abstract GetDeliveryBydeleveryId_dayworkId(id:number):Promise<any> ;
}