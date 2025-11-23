import { Request, Response } from "express";
import { BaseController } from "../../infra/BaseCOntroller";
import ProductRepo from "../../repo/productRepo/productRepo";

import ProductDomain from "../../models/domain/productDoman/ProductDomain";


export default class createProductController extends BaseController {
  public productdomain: ProductDomain;
  public productrepo: ProductRepo;

  constructor() {
    super();
    this.productrepo = new ProductRepo();
    this.productdomain = new ProductDomain();
  }

  protected async executeImpl(req: Request, res: Response): Promise<any> {
    const { name, price } = req.body;

    this.productdomain.setName = name;
    this.productdomain.setPrice = price;

    const product: any = this.productdomain;

    try {
      const isFindProName: boolean = await ProductRepo.IsExistProductByName(
        name
      );
      if (isFindProName) {
        this.conflict(res, `Product   already exists with this name ${name}`);
      } else {
        await this.productrepo.createProduct(product);
      }
    } catch (error) {
      console.error(error);
    }

    return this.ok(res, "product created with success ok");
  }
}
