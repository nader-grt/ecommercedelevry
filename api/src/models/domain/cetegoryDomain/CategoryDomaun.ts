import ProductDomain from "../productDoman/ProductDomain";

export interface ICategoryResponseDomain {
  categoryId: number;
  name: string;
}

// interface CategoryProps {
//   name?: string ;
//   products?: ProductDomain[]
// }

export default class CategoryDomain {
  private name: string = "";

  private categoryId!: number | any;
  private products: ProductDomain[] = [];

  constructor(props?: {
    name?: string;
    products?: ProductDomain[];
    categoryId?: number | undefined;
  }) {
    this.name = props?.name ?? "";
    // this.products = props?.products ?? [] ;
    this.categoryId = Number(props?.categoryId) > 0 ? props?.categoryId : 0;
  }

  addProduct(productName: string,categoryId:number) {
    if (this.products.some((p) => p.getName === productName)) {
      throw new Error("Product already exists in category");
    }

    const product = new ProductDomain({
      name: productName,
      price: 0,
      nameImage: "",
      categoryId:categoryId
    });

    this.products.push(product);

    return product;
  }

  static reCreateCategory(props?: { name: string; id: number }) {
    if (!props) return null;

    const categoryResult = new CategoryDomain({
      name: props.name,
      categoryId: props.id,
    });

    return {
      id: categoryResult.categoryId,
      name: categoryResult.name,
    };
  }

  canBeDeleted() {
    if (this.products.length > 0) {
      throw new Error("Category has products");
    }
  }

  public get getName(): string {
    return this.name;
  }

  public set setName(value: string) {
    this.name = value;
  }

  public get getCategoryId(): number {
    return this.categoryId;
  }

  public set setCategoryId(value: number) {
    this.categoryId = value;
  }

  public getToResponseCategory(): ICategoryResponseDomain {
    return {
      categoryId: this.categoryId,
      name: this.name,
    };
  }

  public GetAllCategoriesByName(data: any[]): ICategoryResponseDomain[] {
    return data?.map((e: any) => ({
      categoryId: e.id,
      name: e.name,
    }));
  }
}
