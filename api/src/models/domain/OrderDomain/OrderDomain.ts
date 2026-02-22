import { STATUS } from "../../Order";
import OrderItemDomain from "../OrderItemDomain/OrderItemDomain";



export default class OrderDomain
{

    
private  orderDate!:Date;
 private customerId!:number;
private status!: STATUS;  

 
  private items: OrderItemDomain[] = [];

   

                            constructor(customerId: number) {
                                this.customerId = customerId;
                                this.orderDate = new Date();
                                this.status = STATUS.PENDING;
                            }


                                                
                    addItem( productId: number, name: string, quantity: number, price: number ) 
                    {

                        if (this.status !== STATUS.PENDING) {
                        throw new Error("cannot add items after payment");
                        }

                        if (quantity <= 0) {
                        throw new Error("quantity must be greater than zero");
                        }

                        this.items.push( new OrderItemDomain(productId, name, quantity, price) );
                    }

                    validateBeforeSave() {
                        if (this.items.length === 0) {
                        throw new Error("cannot create order without items");
                        }
                        // 
                    }

                        payWithCard() {
                            if (this.status !== STATUS.PENDING) {
                            throw new Error("order already paid or closed");
                            }

                            this.status = STATUS.PAID;
                        }

                        ship() {
                            if (this.status !== STATUS.PAID) {
                            throw new Error("order must be paid before shipping");
                            }

                            this.status = STATUS.SHIPPED;
                        }

                        deliver() {
                            if (this.status !== STATUS.SHIPPED) {
                            throw new Error("order must be shipped before delivery");
                            }

                            this.status = STATUS.DELIVERED;
                        }

                        cancel() {
                            if (this.status === STATUS.DELIVERED) {
                            throw new Error("cannot cancel delivered order");
                            }

                            this.status = STATUS.CANCELLED;
                        }

                        getTotalAmount(): number {
                            let total = 0;
                            for (const item of this.items) {
                            total += item.getTotalPrice();
                            }
                            return total;
                        }
}