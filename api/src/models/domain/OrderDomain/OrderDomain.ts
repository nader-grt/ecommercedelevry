import { stringToDate } from "../../../util/conversionDateString";
import { STATUS } from "../../Order";
import OrderItemDomain from "../OrderItemDomain/OrderItemDomain";

export enum PAYMENT_STATUS {
    UNPAID = 'unpaid',
    PARTIAL = 'partial',
    PAID = 'paid',
  }

export default class OrderDomain
{

    
private  orderDate!:Date;
 private customerId!:number;
private status!: STATUS;  
private totalAmountOrder!:number ;
private paymentStatus!: PAYMENT_STATUS;
private paidAmount!: number;

 
  private items: OrderItemDomain[] = [];

   

                            constructor(customerId: number) {
                                this.customerId = customerId;
                                this.orderDate = new Date();
                                this.status = STATUS.PENDING;
                                this.paymentStatus = PAYMENT_STATUS.UNPAID;
                                this.paidAmount = 0;
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

                     

                        payMoeny(amount: number) {
                            if (this.status !== STATUS.PENDING) {
                              throw new Error("order is not payable");
                            }
                          
                            if (amount <= 0) {
                              throw new Error("payment amount must be greater than zero");
                            }
                          
                            this.paidAmount += amount;
                          
                            const total = this.getTotalAmount();
                          
                            if (this.paidAmount < total) {
                              this.paymentStatus = PAYMENT_STATUS.PARTIAL;
                            } else if (this.paidAmount === total) {
                              this.paymentStatus = PAYMENT_STATUS.PAID;
                              this.status = STATUS.PAID;
                            } else {
                              throw new Error("paid amount exceeds total order amount");
                            }
                          }

                          markAsShipped() {
                            if (this.status !== STATUS.PAID) {
                            throw new Error("order must be paid before shipping");
                            }

                            this.status = STATUS.SHIPPED;
                        }

                        markAsDelivered() {
                            if (this.status !== STATUS.SHIPPED) {
                            throw new Error("order must be shipped before delivery");
                            }

                            this.status = STATUS.DELIVERED;
                        }

                        cancelOrder() {
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

                        /**
                         private  orderDate!:Date;
 private customerId!:number;
private status!: STATUS;  
                         */

               public get GetCustmerId():number
               {

                return this.customerId ;
               }
               public get GetOrderDate():Date
               {
                 return (this.orderDate)
               }
               public get GetStatusOrder():any
               {
                 return (this.status)
               }

               //totalAmountOrder

               public get GettotalAmountOrder():any
               {
                 return (this.getTotalAmount())
               }
               public get GetItems():any
               {
                return this.items ;
               }

               public get GetPaymentStatus() {
                return this.paymentStatus;
              }
              
              public get GetPaidAmount() {
                return this.paidAmount;
              }
}