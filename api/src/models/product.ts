import { Sequelize, DataTypes, Model } from "sequelize";


export  default interface IProduct
{
  id?:number ;
  name:string ;
  price:number;
}


export class Product extends Model<IProduct> 
implements IProduct{

     public id!:number ;
     public name:string  ="" ;
     public price:number =0;
    


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
            name:{type:DataTypes.STRING},
            price:{type:DataTypes.DOUBLE}
    }, {
        sequelize,
        tableName: "Products",
        timestamps: false,
      })



    return Product
}