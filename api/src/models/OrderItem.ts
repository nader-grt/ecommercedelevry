import { Sequelize,Model,DataTypes } from "sequelize";


export default interface IOrderItem {



}


export class OrderItem extends Model<IOrderItem> implements IOrderItem {
   

    
  }



  export function OrderItemModel(sequelize: Sequelize) {
    OrderItem.init(
      {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        firstName: { type: DataTypes.STRING, allowNull: false },
        lastName: { type: DataTypes.STRING, allowNull: false },
        phone: { type: DataTypes.STRING, allowNull: false },
        email: { type: DataTypes.STRING, allowNull: false, unique: true },
        password: { type: DataTypes.STRING, allowNull: false },
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
  
    return OrderItem;
  }
  