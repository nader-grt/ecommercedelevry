import { Request, Response } from "express";
import { BaseController } from "../../infra/BaseCOntroller";
import ProductDomain from "../../models/domain/productDoman/ProductDomain";
import ProductRepo from "../../repo/productRepo/productRepo";



export default class  GetProductController extends BaseController
{
                private _productDomain:ProductDomain ;
                private  _productRepo:ProductRepo ;
          constructor()
          {super()
             
            this._productDomain = new  ProductDomain() ;
            this._productRepo   = new   ProductRepo() ;

          }


          protected async executeImpl(req: Request, res: Response): Promise<any> {
               

                            try {
                                
                            } catch (error) {
                                console.log(error)
                            }
          }
}