import { Sequelize, DataTypes, Model } from "sequelize";












export default interface IDelivererDayWork {
    id?: number;
    nbrHours: number ;
    delivererid: number;
    dayWorkid: number;
  

}

export class DelivererDayWork extends Model<IDelivererDayWork> implements IDelivererDayWork {
 // public id!: number;
 public id!: number;
 public nbrHours!: number ;
 public delivererid!: number;
 public dayWorkid!: number;



}


export function DelivererDayWorkModel(sequelize: Sequelize) {
    DelivererDayWork.init(
    {
     
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nbrHours: {
        type: DataTypes.DECIMAL,
        allowNull: true,
      },
      delivererid: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      dayWorkid: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    
    },
    {
      sequelize,
      tableName: "deliverer_dayWorks",
      timestamps: true,
    }
  );

  return DelivererDayWork;
}
