import { Request, Response } from "express";
import { BaseController } from "../../infra/BaseCOntroller";
import ProductRepo from "../../repo/productRepo/productRepo";
import FileHandler, { folderPath } from "../../filesystem/fileHandle";
import ProductDomain from "../../models/domain/productDoman/ProductDomain";



export default class updateProductController extends BaseController
{

    public   _productRepo: ProductRepo;
    public    fileHandle : FileHandler ;
    public   productDomain : ProductDomain


    constructor()
    {  super()
        this._productRepo  =  new ProductRepo()  ;
            this.productDomain  =  new ProductDomain()
        this.fileHandle  =  new  FileHandler(folderPath)
    }

        protected  async executeImpl(req: Request, res: Response): Promise<any> {
            
         
            const {name,price}  = req.body  ;
            const  file:any  =  req.file ;

               //    console.log("req.body",req.body, "req.file",req.file)

                return   this.ok(res,"any ")
        }

}
