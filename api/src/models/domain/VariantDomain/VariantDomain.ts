export default class VariantDomain {

  private productId!: number;
  private color!: string;
  private size!: string;
  private price!: number;
  private sku: string;
  constructor(productId: number, color: string, size: string, price: number) {
    this.productId = productId;
    this.color = color;
    this.size = size;
    this.price = price;
    this.sku = this.generateSKU();
  }



  private generateSKU(): string {
    const timestamp = Date.now().toString().slice(-4); //   
    return `${this.productId}-${this.color.toUpperCase()}-${this.size.toUpperCase()}-${timestamp}`;
  }

  // Getters
  public get getSKU(): string {
    return this.sku;
  }

  public get getColor(): string {
    return this.color;
  }

  public get getSize(): string {
    return this.size;
  }

  public get getPrice(): number {
    return this.price;
  }




}
