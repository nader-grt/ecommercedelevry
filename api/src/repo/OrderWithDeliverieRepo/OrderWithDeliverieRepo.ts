import { Orderwithdeliverie, sequelize } from "../../models/main";
import IOrderWithDeliverieRepo from "./IOrderWithDeliverieRepo";

export default class OrderWithDeliverieRepo extends IOrderWithDeliverieRepo {

  public async CreateOrderWithDeliver(orderWithDeliver: any, t?: any): Promise<any> {
    let transaction = t;
    let localTransaction = false;

    try {

      if (!transaction) {
        transaction = await sequelize.transaction();
        localTransaction = true;
      }



      const mapperOrderWith:any = {
        orderId: orderWithDeliver.orderId,
        status: orderWithDeliver.status,
        pickedUpAt:new Date(),
        deliveredAt:new Date()
      };


      console.log("mapperOrderWith")

      const orderWithDel = await Orderwithdeliverie.create(mapperOrderWith, {
        transaction,
        raw: true
      });

   
      if (localTransaction) await transaction.commit();

      console.log("OrderWithDeliver created", orderWithDel);
      return orderWithDel;

    } catch (error) {
      if (localTransaction && transaction) await transaction.rollback();
      throw error; 
    }
  }

}