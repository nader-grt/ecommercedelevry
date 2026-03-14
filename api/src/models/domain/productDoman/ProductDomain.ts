import VariantDomain from "../VariantDomain/VariantDomain";

export default class ProductDomain {

  private id!: number
  private name: string = ""
  private price: number = 0
  private nameImage!: string
  private categoryId!: number
  private supplierId!: number
  private variants: VariantDomain[] = []

  constructor(props?: {
    name: string
    price: number
    nameImage: string
    categoryId: number
  }) {

    this.id = Date.now()

    if (props) {
      this.price = props.price
      this.name = props.name
      this.nameImage = props.nameImage
      this.categoryId = props.categoryId
    }

  }

  public addVariant(color: string, size: string, price: number) {

    const variant = new VariantDomain(this.id, color, size, price)

    this.variants.push(variant)

    return variant

  }

  public get getName(): string {
    return this.name
  }

  public set setName(value: string) {
    this.name = value
  }

  public get getPrice(): number {
    return this.price
  }

  public set setPrice(value: number) {

    if (value <= 0) {
      throw new Error("Price must be greater than zero")
    }

    this.price = value
  }

  public get getImageProduct(): string {
    return this.nameImage
  }

  public set setImageProduct(value: string) {
    this.nameImage = value
  }

  public get getCategoryId(): number {
    return this.categoryId
  }

  public get getSupplierId(): number {
    return this.supplierId
  }

  public  getVariants() {
    return this.variants;
  }

}