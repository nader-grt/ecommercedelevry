
import { Request, Response } from "express";
import { BaseController } from "../../infra/BaseCOntroller";
import CreateProductUseCase from "../../useCases/productUseCase/createProductUseCase";


export default class createProductController extends BaseController
{

                      private _usecasecreateProduct!:CreateProductUseCase
                   constructor(createProductUseCase:CreateProductUseCase)
                   {super()
                      

                    this._usecasecreateProduct = createProductUseCase
                   }


       protected async executeImpl(req: Request, res: Response): Promise<any> {
                    

                            const { name, price, categoryId, supplierId } = req.body;
                            const file = req.file;
                      try {
                        

                             

                        if (!file) {
                            return this.badRequest(res, "Product image is required");
                          }
                         
                          const dto = {
                            nameProduct: name,
                            priceProduct: Number(price),
                            categoryIdProduct: Number(categoryId),
                            supplierIdProduct: supplierId ? Number(supplierId) : null,
                            imageName: file.filename,
                         
                        };
                        const allowedMimeTypes = ["image/jpeg", "image/png", "image/gif","image/avif"];
                        const MAX_SIZE = 7 * 1024 * 1024 ;
                        if (file.size > MAX_SIZE) {
                            return res.status(400).json({
                              message: `File is too large. Maximum allowed size is ${MAX_SIZE / (1024*1024)} MB`,
                            });
                          }

                                       const result =        await this._usecasecreateProduct.execute(dto) ;

                                       if(!result.success)
                                       {
                                         return this.fail(res,result.message)
                                       } 

                                       return this.ok(res,"product created with success ")

                      } catch (error) {
                        console.log(error)
                      }
       }
}