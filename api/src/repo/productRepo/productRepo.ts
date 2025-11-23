
import { Product } from "../../models/main";
import IProduct from "../../models/product";
import productRepoInterface from "./productRepoInterface";

export default class ProductRepo extends productRepoInterface {
  public async FindAllProducts() {}

  public async FindProductById(id: number): Promise<void> {}

  public async createProduct(product:any):Promise<void> 
  {    
                

           await  Product.create(product)

  }

    static async IsExistProduct():Promise<IProduct[]> 
  {
        
    const listProducts :IProduct[]     = await Product.findAll() ;
         return  listProducts 
  }

  static async IsExistProductByName(nameProduct:string):Promise<boolean> 
  {
        
    const listProducts :IProduct[]     = await Product.findAll() ;

      for(const pro of listProducts)
      {
            if(pro.name === nameProduct)
            {
              return true ;
            }

      }
         return  false 
  }
}
