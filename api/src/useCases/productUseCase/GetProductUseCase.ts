import ProductRepo from "../../repo/productRepo/productRepo";




interface GetProductDTO {
   
    name:string; 
    price:number ;
    categoryId:number;
    supplierId:any;
  }








export default class GetProductUseCase
{
               private _productRepoUseCase!: ProductRepo;
           constructor(getproductUsecase:ProductRepo)
           {
               this._productRepoUseCase = getproductUsecase ;
           }


           async execute(productId:number):Promise<any>
           {
                        
                             try {

                              console.log("step 3 usecase ",productId)
                         const product =         await this._productRepoUseCase.GetProductById(productId) ;

                         console.log("prooo  ",product)

                         if(!product)
                         {
                            return {success :false ,message : "product not found "}
                         }

                         return {success :true ,product : product}  ;
                          
                             } catch (error) {
                                console.log(error)
                             }
           }
}                       