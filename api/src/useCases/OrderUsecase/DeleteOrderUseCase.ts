import OrderRepo from "../../repo/OrderRepo/OrderRepo";

export default class DeleteOrderUseCase
{



                private _deleteorderusecase!:OrderRepo

                constructor(deleteOrderUseCase:OrderRepo)
                {
                    this._deleteorderusecase = deleteOrderUseCase ;
                }

               async execute():Promise<any>
               {
                          try {
                            
                          } catch (error) {
                            
                          }

               }
}