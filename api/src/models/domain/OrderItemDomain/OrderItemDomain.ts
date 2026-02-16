


export default class OrderItemDomain 
{




//   private  productId!:number;
//   private  quantity!:number;
//   private  unitPrice!:number;
//   private  productName!:string ;

//   constructor(
//     productId: number,
//     productName: string,
//     quantity: number,
//     unitPrice: number
//   ) {
//     this.productId = productId;
//     this.productName = productName;
//     this.quantity = quantity;
//     this.unitPrice = unitPrice;
//   }

//   getTotalPrice(): number {
//     return this.quantity * this.unitPrice;
//   }


  constructor(
    private productId: number,
    private productName: string,
    private quantity: number,
    private unitPrice: number
  ) {}

  getTotalPrice(): number {
    return this.quantity * this.unitPrice;
  }


}