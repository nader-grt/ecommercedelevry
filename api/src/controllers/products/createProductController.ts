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
    const { name, price ,categoryId ,supplierId} = req.body;
    const  file:any  = req.file


    console.log(" create productttttt   controller   2") ;

  

    const priceNumber = Number(price);
    const categoryIdNumber = Number(categoryId);
    const supplierIdNumber = supplierId ? Number(supplierId) : null;


    console.log(" reqqq 3 req of file   ",req.file)  ;

    console.log(" req of body   ", { name, price ,categoryId ,supplierId}  )

    if (!file) {
      return this.badRequest(res, "Product image is required");
    }

/**
 * 
const productDomain = new ProductDomain();
productDomain.setName = name;
productDomain.setPrice = Number(price);
productDomain.setImageProduct = file.filename;
productDomain.setCategoryId = Number(categoryId);
productDomain.setSupplierId = supplierId ? Number(supplierId) : null;
}
 */

 
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
       // await this.productrepo.createProduct(product);
      } 
    } catch (error) {
      console.error(error);
    }

    return this.ok(res, "product created with success 2222ok");
  }
}
