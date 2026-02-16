
import { Sequelize,Model,DataTypes } from "sequelize";


export default interface IOrderItem {
id?:number ;
  orderId:number ;
  productId:number;
  quantity:number;
  unitPrice:number;
  productName:string ;
  totalPrice:number;


}



/**
 * 
 * 

  orderId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Orders',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',  
      },

      productId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Products',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT', 
      },

      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },

      unitPrice: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
productName

 await queryInterface.addColumn('OrderItems', 'productName', {
      type: Sequelize.STRING,
      allowNull: false,
    });

   
    await queryInterface.addColumn('OrderItems', 'totalPrice', {
      type: Sequelize.DOUBLE,
      allowNull: false,
      comment: 'Total price for this line: quantity * unitPrice',
    });



 */
export class OrderItem extends Model<IOrderItem> implements IOrderItem {
   
  public id!:number;

  public  orderId!:number ;
  public  productId!:number;
  public  quantity!:number;
  public  unitPrice!:number;
  public  productName!:string ;
  public  totalPrice!:number;
    
  }



  export function OrderItemModel(sequelize: Sequelize) {
    OrderItem.init(
      {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        orderId: { type: DataTypes.INTEGER, allowNull: false },
        productId: { type: DataTypes.INTEGER, allowNull: false },
        quantity: { type: DataTypes.INTEGER, allowNull: false },
        unitPrice: { type: DataTypes.INTEGER, allowNull: false, unique: true },
        productName: { type: DataTypes.STRING, allowNull: false },
     
        totalPrice: { type: DataTypes.DOUBLE, allowNull: false },
      },
      {
        sequelize,
        tableName: "OrderItems",
        timestamps: true,
      }
    );
  
    return OrderItem;
  }
  