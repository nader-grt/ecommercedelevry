import { Model, Sequelize } from "sequelize";





interface IOrderWithDeliverie
{

}


export  class OrderWithDeliverie extends Model<IOrderWithDeliverie> implements  IOrderWithDeliverie
{



}



export function OrderWithDeliverieModel(sequelize: Sequelize){

    OrderWithDeliverie.init({





    },{
        sequelize,
        tableName: "DeliverieOrders",
        timestamps: true,
      })
}