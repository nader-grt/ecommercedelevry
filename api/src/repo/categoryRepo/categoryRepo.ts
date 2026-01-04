import { Category } from "../../models/main";
import categoryRepoInterface from "./categoryRepoInterface";

export  interface ICategoryRepo  {
    name :string ;
}

export default class CategoryRepo extends categoryRepoInterface {


    public  async createCategory(category:ICategoryRepo):Promise<void> 
    { 
          
              await  Category.create(category)
    }
}