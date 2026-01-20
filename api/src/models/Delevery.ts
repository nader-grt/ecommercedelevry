import { Sequelize, DataTypes, Model } from "sequelize";

export enum Role {
  ADMIN = "ADMIN",
  USER = "USER",
  SUPPLIER = "SUPPLIER",
}










export default interface IDeliverery {
  id?: number;
  workingTime:string ;
  carType?:string;
  employeeId?:number;

}

export class Deliverery extends Model<IDeliverery> implements IDeliverery {
  public id!: number;
  public daysOfWork!: number;
  public workingTime!:string;
  public employeeId!:number;


}



export function DelivererModel(sequelize: Sequelize) {
    Deliverery.init(
    {
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      workingTime: { type: DataTypes.INTEGER, allowNull: false },
      carType: { type: DataTypes.STRING, allowNull: false },
      employeeId: { type: DataTypes.INTEGER, allowNull: false },
 
    },
    {
      sequelize,
      tableName: "deliverers",
      timestamps: true,
    }
  );

  return Deliverery;
}
