import OrderRepo from "../../repo/OrderRepo/OrderRepo";

export default class DeleteOrderByAdminUseCase
{



                private _deleteorderByAdminusecase!:OrderRepo

                constructor(deleteOrderUseCase:OrderRepo)
                {
                    this._deleteorderByAdminusecase = deleteOrderUseCase ;
                }

               async execute():Promise<any>
               {
                          try {
                            
                          } catch (error) {
                            
                          }

               }
}