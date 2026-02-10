import { Sequelize, DataTypes, Model } from "sequelize";


export  default interface IProduct
{
  id?:number ;
  name:string ;
  price:number;
  nameImage:string ;
  categoryId?: number;
  supplierId?:number;
}


export class Product extends Model<IProduct> 
implements IProduct{

    public id!: number; 
     public name!:string   ;
     public price!:number ;
     public nameImage!: string;
    


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

     public get getNameImage():string
     {
        return this.nameImage ;
     }


     public set setNameImage(value:string)
     {
         this.nameImage  = value;
     }


}


export  function ProductModel(sequelize:Sequelize)
{
    Product.init(
        {
            id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
            name: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false,
              },
              price: {
                type: DataTypes.DOUBLE,
                allowNull: false,
              },
              nameImage: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false,
              },
              categoryId: {
                type: DataTypes.INTEGER,
                allowNull: false,
              },
              supplierId: {
                type: DataTypes.INTEGER,
                allowNull: true,
              }
           
    }, {
        sequelize,
        tableName: "Products",
        timestamps: false,
      })



    return Product
}