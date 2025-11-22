import { Sequelize, DataTypes, Model } from "sequelize";


export  default interface IProduct
{
  id?:number ;
  name:string ;
  price:number;
}


export class Product extends Model<IProduct> 
implements IProduct{

    public id!: number; 
     public name!:string   ;
     public price!:number ;
    


     public get getNameProduct():string
     {
        return this.name ;
     }


     public set setNameProduct(value:string)
     {
         this.name  = value;
     }



     public get getPriceProduct():number
     {
        return this.price ;
     }


     public set setPriceProduct(value:number)
     {
         this.price  = value;
     }


}


export  function ProductModel(sequelize:Sequelize)
{
    Product.init(
        {
            id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
            price: {type:DataTypes.DOUBLE, allowNull: false },
            name: { type: DataTypes.STRING, allowNull: false, unique: true },
           
    }, {
        sequelize,
        tableName: "Products",
        timestamps: false,
      })



    return Product
}