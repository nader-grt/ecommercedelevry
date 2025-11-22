import { Request, Response } from "express";
import { BaseController } from "../../infra/BaseCOntroller";
import productRepo from "../../repo/productRepo/productRepo";

import ProductDomain from "../../models/domain/productDoman/ProductDomain";
import IProduct from "../../models/product";


export default class createProductController extends BaseController
{

           
        public  productdomain:ProductDomain
        public   productrepo   :productRepo

        constructor()
        {
            super()
            this.productrepo  =  new productRepo()
            this.productdomain = new ProductDomain()
        }
 
    protected async executeImpl(req: Request, res: Response): Promise<any> {
      
            const {name,price}   =  req.body

      //  console.log("body",{name,price})

      this.productdomain.setName  = name ;
      this.productdomain.setPrice = price

          const product :any  =  this.productdomain

      

          

                 const allProducts : IProduct[]         = await    productRepo.IsExistProduct()  ;

                 console.log("alllllllllll", typeof allProducts  ,product)
                 await    this.productrepo.createProduct(product)
        

             return this.ok(res,"product created with success ok")

  }

}