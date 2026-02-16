import { Request, Response } from "express";
import { BaseController } from "../../infra/BaseCOntroller";
import GetProductByCategoryUseCase from "../../useCases/productUseCase/GetProductByCategoryUseCase";

 interface listProductDTO
 {
    nameProduct:string ;
    priceProdust:number;
    urlImage:string;
 }

export default class GetProductByCategoryController  extends BaseController
{
           async listProduct(products:any[]):Promise<listProductDTO[] | any>
           {
            return products.map((p) => ({
                nameProduct: p.name,
                priceProdust: p.price,
                urlImage: `${process.env.BASE_URL}/images/${p.nameImage}`,
              }));
           }
           private _usecasegetProductByCategory!:GetProductByCategoryUseCase
           constructor(usecasegetProductByCategory:GetProductByCategoryUseCase)
           {super()
             this._usecasegetProductByCategory = usecasegetProductByCategory ;
           }

           protected async executeImpl(req: Request, res: Response): Promise<any> {
               
                    const {categoryid} = req.params

                       try {
                        

                        const result =       await this._usecasegetProductByCategory.execute({
                                categoryId :Number(categoryid)
                               })

                               if(!result.success)
                               {
                                return this.fail(res,result.message)
                               }


                              // console.log(" rrrrrrrrrrrr  ",result.data)

                               const resultListProducts  =   await this.listProduct(result.data)
                               return this.resultValue(res,"products ",{category :result.category,products:resultListProducts})
                       } catch (error) {
                          console.log(error)
                       }
           }
}