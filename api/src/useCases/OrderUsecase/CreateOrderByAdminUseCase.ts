import OrderDomain from "../../models/domain/OrderDomain/OrderDomain";
import { userRepo } from "../../repo/auth/userRepo/userRepo";
import OrderRepo from "../../repo/OrderRepo/OrderRepo";
import ProductRepo from "../../repo/productRepo/productRepo";



interface CreateOrderDTO {
    custmerId: number;
    items: [];
    actor: {
      ownerId: number;
      ownerRole: string;
      ownerEmail?: string;
    };
  }

export default class CreateOrderByAdminUseCase 
{
      private _userRepo!:userRepo
      private _orderRepo!:OrderRepo
      private _productRepo!:ProductRepo
       constructor( userrepo  :userRepo,orderRepo:OrderRepo ,productRepo:ProductRepo)
       {
           this._orderRepo = orderRepo ;
           this._userRepo = userrepo ;
           this._productRepo = productRepo
       }

       async execute(dto:CreateOrderDTO):Promise<any>
       {


               try {


                console.log("dddddddd usecase Admin ",dto)

                    const user =  await this._userRepo.FindUserById(dto.custmerId)  
                    if(!user)
                    {
                       return {success:false,message:"user not found "}
                    }

                    console.log("uuuuuuuuuu  ",user)
//  [ { productId: 5, quantity: 2 }, { productId: 2, quantity: 1 } ],

         await this._productRepo.GetProductById      //  promiseall 
                     const  order  =  new OrderDomain(dto.custmerId)  ;

                     console.log("oooooooo  ",order  )

                     // await  this._orderRepo.CreateOrderByAdmin
                

                     return {success:true,message:"okkkkkkkk"}
               } catch (error) {
                console.log(error)
               }
       }
}