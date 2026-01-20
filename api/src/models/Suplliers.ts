import { Sequelize, DataTypes, Model } from "sequelize";

export enum Role {
  ADMIN = "ADMIN",
  USER = "USER",
  SUPPLIER = "SUPPLIER",
}










export default interface ISupllier {
  id?: number;
  companyName?: string;
  companyPhone:String;
  companyemail:String;
  address:String;
  contactPerson:String;
  employeeId?:Number;


}

export class Supllier extends Model<ISupllier> implements ISupllier {
  public id!: number;
  public companyName!: string;
  public   companyPhone!:String;
  public   companyemail!:String;
  public   address!:String;
  public   contactPerson!:String;


}

/**
 * 
 * @param sequelize 
 * 
 * 
 * 


      companyName: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },

      companyPhone: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },

      companyemail: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      address: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      contactPerson: {
        type: Sequelize.STRING,
        allowNull: true,
      },

    

 Employees
 * @returns 
 */

export function SupplierModel(sequelize: Sequelize) {
    Supllier.init(
    {
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      companyName: { type: DataTypes.STRING, allowNull: false },
      companyPhone: { type: DataTypes.STRING, allowNull: false },
      companyemail: { type: DataTypes.STRING, allowNull: false },
      //address
      address: { type: DataTypes.STRING, allowNull: false },
      contactPerson: { type: DataTypes.STRING, allowNull: false },
 
    },
    {
      sequelize,
      tableName: "suplliers",
      timestamps: true,
    }
  );

  return Supllier;
}
