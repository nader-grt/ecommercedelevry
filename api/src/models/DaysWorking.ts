import { Sequelize, DataTypes, Model } from "sequelize";

export enum Role {
  ADMIN = "ADMIN",
  USER = "USER",
  SUPPLIER = "SUPPLIER",
}










export default interface IDeliverery {
  id?: number;
  daysOfWork?: number;

  employeeId?:number;

}

export class DayWorking extends Model<IDeliverery> implements IDeliverery {
  public id!: number;
  public daysOfWork!: number;
 


}



export function DaysWorkingModel(sequelize: Sequelize) {
    DayWorking.init(
    {
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      daysOfWork: { type: DataTypes.STRING, allowNull: false },
      employeeId: { type: DataTypes.INTEGER, allowNull: false },
 
    },
    {
      sequelize,
      tableName: "dayWorks",
      timestamps: true,
    }
  );

  return DayWorking;
}
