import OrderDomain from "../../models/domain/OrderDomain/OrderDomain";
import IOrderRepo from "./IOrderRepo";
import sequelize from "../../dbConfig/config";
import { Order, OrderItem } from "../../models/main";





export default class OrderRepo extends IOrderRepo
{

   public async CreateOrderByAdmin(order:OrderDomain):Promise<any> 
   {

           const t = await sequelize.transaction() ;

                     console.log("order rrepooooooooooooo DB ",order)


 

                    try {
                    const orderMapper :any = {
                         customerId:order.GetCustmerId,
                         orderDate:order.GetOrderDate,
                         totalAmount:order.GettotalAmountOrder,
                         status:order.GetStatusOrder
                    }

                    console.log("dbbbbbbbbbbbb  ",orderMapper)
                      const resultOrder =   await Order.create(orderMapper,{transaction: t })
                        
                      for (let item of order.GetItems ) {
                       
                        console.log("item 11  ",item ,"\n")

                        const orderItemMapper :any = {
                            orderId:resultOrder.id,
                            productId:item.productId,
                            quantity:item.quantity,
                            price:Number(item.unitPrice),
                            productName:item.productName

                        }

                        console.log("orderItemMapper  ",orderItemMapper)
                              await    OrderItem.create(orderItemMapper,{transaction: t })

                      }


                        await t.commit();
                    } catch (error) {
                        console.log(error)
                        await t.rollback();
                    }
   }


   protected async FindOrderById(orderId:number,) :Promise<any> 
   {  const t = await sequelize.transaction() ;
                    try {
                      const order = await Order.findByPk(orderId, { raw: true ,transaction: t });
                      return order;  
                  } catch (error) {
                      console.log(error);
                      return null; 
                  }

   }

   public async DeleteOrderByIdAdmin(orderId:number):Promise<any> 
   {

    const t = await sequelize.transaction() ;
    const order = await this.FindOrderById(orderId);
              try {
                


                const order = await this.FindOrderById(orderId);
                if (!order) {
                    await t.rollback();
                    return "Order not found";
                }
        
                if (order.status === "completed") {
                    await t.rollback();
                    return "Cannot delete completed order";
                }
        
              
                await OrderItem.destroy({ where: { orderId }, transaction: t });
        
            
                await Order.destroy({ where: { id: orderId }, transaction: t });
        
                await t.commit();
                return "Order deleted successfully";
              } catch (error) {
                await t.rollback();
                console.log(error);
                return "Error deleting order";
              }
   }
    
}
