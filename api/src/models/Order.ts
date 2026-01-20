import { Sequelize,Model,DataTypes } from "sequelize";


export default interface IOrder {



}


export class Order extends Model<IOrder> implements IOrder {
   


  }



  export function OrderModel(sequelize: Sequelize) {
    Order.init(
      {
        // id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        // firstName: { type: DataTypes.STRING, allowNull: false },
        // lastName: { type: DataTypes.STRING, allowNull: false },
        // phone: { type: DataTypes.STRING, allowNull: false },
        // email: { type: DataTypes.STRING, allowNull: false, unique: true },
        // password: { type: DataTypes.STRING, allowNull: false },
        // role: {
        //   type: DataTypes.ENUM(...Object.values(Role)),
        //   allowNull: false,
        //   defaultValue: Role.USER,
        // },
        // city: { type: DataTypes.STRING, allowNull: false },
        // address: { type: DataTypes.STRING, allowNull: false },
      },
      {
        sequelize,
        tableName: "Users",
        timestamps: true,
      }
    );
  
    return Order;
  }
  