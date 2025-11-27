import { Request, Response } from "express";
import { BaseController } from "../../infra/BaseCOntroller";
import ProductRepo from "../../repo/productRepo/productRepo";

import ProductDomain from "../../models/domain/productDoman/ProductDomain";
import FileHandler, { folderPath } from "../../filesystem/fileHandle";




export default class createProductController extends BaseController {
  public productdomain: ProductDomain;
  public productrepo: ProductRepo;
  private _fileHandler: FileHandler;


  constructor() {
    super();
    this.productrepo = new ProductRepo();
    this.productdomain = new ProductDomain();
    this._fileHandler = new FileHandler(folderPath);
  }

  protected async executeImpl(req: Request, res: Response): Promise<any> {
    const { name, price } = req.body;
    const  file:any  = req.file

//"eeeeeeeee(rtçààà"

 
    this.productdomain.setName = name;
    this.productdomain.setPrice = price;
   this.productdomain.setImageProduct = file?.filename
    const product: any = this.productdomain;
    const isFindProName: boolean = await ProductRepo.IsExistProductByName(
      name
     );

     if (isFindProName) {

      console.error(`Product   already exists with this name ${name}`)
     // this.conflict(res, `Product   already exists with this name ${name}`);
    }
    try {
     
      if (product) {
        await this.productrepo.createProduct(product);
      } 
    } catch (error) {
      console.error(error);
    }

    return this.ok(res, "product created with success ok");
  }
}
