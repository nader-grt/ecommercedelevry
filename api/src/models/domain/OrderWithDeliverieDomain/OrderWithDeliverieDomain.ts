enum DELIVERY_STATUS {
    PENDING_PICKUP = 'PENDING_PICKUP',
    IN_TRANSIT = 'IN_TRANSIT',
    DELIVERED = 'DELIVERED',
    CANCELLED = 'CANCELLED'
  }
  
 export default class OrderWithDeliverieDomain {
    private orderId: number;
    private deliveryPersonId?: number;
    private status: DELIVERY_STATUS;
    private pickedUpAt?: Date;
    private deliveredAt?: Date;
  
    constructor(orderId: number) {
      this.orderId = orderId;
      this.status = DELIVERY_STATUS.PENDING_PICKUP;
    }
  
    assignDeliveryPerson(personId: number) {
      if (this.status !== DELIVERY_STATUS.PENDING_PICKUP) {
        throw new Error("cannot assign delivery after pickup");
      }
      this.deliveryPersonId = personId;
    }
  
    pickUp(personId: number) {
      if (this.deliveryPersonId !== personId) {
        throw new Error("not authorized");
      }
      if (this.status !== DELIVERY_STATUS.PENDING_PICKUP) {
        throw new Error("order already picked up");
      }
      this.status = DELIVERY_STATUS.IN_TRANSIT;
      this.pickedUpAt = new Date();
    }
  
    markAsDelivered(personId: number) {
      if (this.deliveryPersonId !== personId) {
        throw new Error("not authorized");
      }
      if (this.status !== DELIVERY_STATUS.IN_TRANSIT) {
        throw new Error("cannot deliver before pickup");
      }
      this.status = DELIVERY_STATUS.DELIVERED;
      this.deliveredAt = new Date();
    }
  
    cancel() {
      if (this.status === DELIVERY_STATUS.DELIVERED) {
        throw new Error("cannot cancel delivered delivery");
      }
      this.status = DELIVERY_STATUS.CANCELLED;
    }
  }