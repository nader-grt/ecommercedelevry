import { Sequelize,Model,DataTypes } from "sequelize";


export const enum STATUS 
{
PENDING = 0, 
PAID = 1, 
SHIPPED  =2  ,
 DELIVERED  = 3,
  CANCELLED=4 

}

export default interface IOrder {
  id?:number ;
  orderDate:Date;
  customerId:number;
  totalAmount:number ;
  status:STATUS


}



/*



      orderDate: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },

      customerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users', //
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',
      },

      totalAmount: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        defaultValue: 0,
      },

      status: {
        type: Sequelize.ENUM('pending', 'paid', 'shipped', 'delivered', 'cancelled'),
        allowNull: false,
        defaultValue: 'pending',
      },



*/

export class Order extends Model<IOrder> implements IOrder {
   
        public id!: number ;
         public orderDate!: Date;
         public customerId!:number;
         public totalAmount!:number ;
         public status!:STATUS ;

  }



  export function OrderModel(sequelize: Sequelize) {
    Order.init(
      {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
         orderDate: { type: DataTypes.DATE, allowNull: false },
         customerId: { type: DataTypes.INTEGER, allowNull: false },
        totalAmount: { type: DataTypes.DOUBLE, allowNull: false },
     
        status: {
          type: DataTypes.ENUM('pending', 'paid', 'shipped', 'delivered', 'cancelled'),
          allowNull: false,
          //defaultValue: Role.USER,
        },
      },
      {
        sequelize,
        tableName: "Orders",
        timestamps: true,
      }
    );
  
    return Order;
  }
  