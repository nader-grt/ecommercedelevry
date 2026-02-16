import FileHandler from "../../filesystem/fileHandle";
import ProductDomain from "../../models/domain/productDoman/ProductDomain";
import CategoryRepo from "../../repo/categoryRepo/categoryRepo";
import ProductRepo from "../../repo/productRepo/productRepo";
import SupplierRepo from "../../repo/SupplierRepo/SupplierRepo";

interface CreatProductDTO {
  nameProduct: string;
  priceProduct: number;
  categoryIdProduct: number;
  supplierIdProduct: number | null;
  imageName: string;
}

export default class CreateProductUseCase {
  private _productRepoUseCase!: ProductRepo;
  private _fileHandlerUseCase!: FileHandler;

  private _categoryRepoUseCase!: CategoryRepo;
  private _supplierRepoUseCase!: SupplierRepo;
  constructor(
    fileHandlerUseCase: FileHandler,
    productUseCase: ProductRepo,
    categoryRepo: CategoryRepo,
    supplierRepo: SupplierRepo
  ) {
    this._productRepoUseCase = productUseCase;
    this._fileHandlerUseCase = fileHandlerUseCase;
    this._categoryRepoUseCase = categoryRepo;
    this._supplierRepoUseCase = supplierRepo;
  }

  async execute(dto: CreatProductDTO): Promise<any> {
    
    const {
      nameProduct,
      priceProduct,
      categoryIdProduct,
      supplierIdProduct,
      imageName,
    } = dto;
    try {
      const category: any = await this._categoryRepoUseCase.GetCategoryById(
        Number(categoryIdProduct)
      );
      const supplier: any = await this._supplierRepoUseCase.GetSupplierByID(
        Number(supplierIdProduct)
      );
      const supId = supplier ? supplier.id : null;

      if (!category) {
        return { success: false, message: "category not found" };
      }

      const isFindProName: boolean =
        await this._productRepoUseCase.IsExistProductByName(nameProduct);

   
      if (isFindProName) {
     
        throw new Error("Product name already exists");
      }

      const product = new ProductDomain();
      product.setName = nameProduct;
      product.setPrice = priceProduct;

      product.setImageProduct = imageName;

      await this._productRepoUseCase.createProduct(product, category.id, supId);

      return { success: true };
    } catch (error) {
      if (imageName) {
        await this._fileHandlerUseCase.removeFile(imageName);
      }
      return { success: false, message: " product name already exist " };
    }
  }
}
