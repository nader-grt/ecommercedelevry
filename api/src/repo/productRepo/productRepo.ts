

import FileHandler from "../../filesystem/fileHandle";
import { Product, sequelize } from "../../models/main";
import IProduct from "../../models/product";
import productRepoInterface from "./productRepoInterface";

export default class ProductRepo extends productRepoInterface {
  public async FindAllProducts() {}

  public async FindProductById(id: number): Promise<void> {}

  public async createProduct(product:any):Promise<void> 
  {    
                
            const t = await sequelize.transaction()

         try {
          await  Product.create(product,{transaction:t})

          await t.commit();
         } catch (error) {
          await t.rollback()
          console.log(error)
         }

  }


  static async IsExistProductByName(nameProduct: string): Promise<boolean> {
    const t = await sequelize.transaction(); // 

    try {
      const product = await Product.findOne({
        where: { name: nameProduct },
        transaction: t,
      });

      await t.commit(); //  transaction

      return product !== null;
    } catch (error) {
      await t.rollback();
      console.log(error);
      return false;
    }
  }

  static async IsExistProductByImage(nameImage: string): Promise<boolean> {
    try {
      const product = await Product.findOne({ where: { nameImage } });
      return product !== null;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
