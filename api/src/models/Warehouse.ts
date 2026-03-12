import { DataTypes, Model, Sequelize } from "sequelize";



export default  interface IWarehouse
{
id:number ;
name:string;
location:string;

}




export  class  Warehouse extends Model<IWarehouse> implements IWarehouse
{
    public id!: number;
  public name!: string;
  public location!: string;

}


export  function  WarehouseModel (sequelize: Sequelize) {

    Warehouse.init(
        {

            id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
            name: { type: DataTypes.STRING, allowNull: false },
            location: { type: DataTypes.STRING, allowNull: false },
        },
        {
            sequelize,
            tableName: "Warehouses",
            timestamps: true,
          }
    )

    return Warehouse ;
}