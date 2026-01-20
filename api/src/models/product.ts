import { Sequelize, DataTypes, Model } from "sequelize";


export  default interface IProduct
{
  id?:number ;
  name:string ;
  price:number;
  nameImage:string ;
  categoryId?: number;
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
            price: {type:DataTypes.DOUBLE, allowNull: false },
            name: { type: DataTypes.STRING, allowNull: false, unique: true },
            nameImage: { type: DataTypes.STRING, allowNull: false, unique: true },
            categoryId: { type: DataTypes.INTEGER, allowNull: false },
           
    }, {
        sequelize,
        tableName: "Products",
        timestamps: false,
      })



    return Product
}