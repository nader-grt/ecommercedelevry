import { Request, Response, Router } from "express";
import OrderRepo from "../../repo/OrderRepo/OrderRepo";
import DeleteOrderUseCase from "../../useCases/OrderUsecase/DeleteOrderUseCase";
import DeleteOrderController from "../../controllers/Orders/DeleteOrderController";
import { verifyToken } from "../../middleware/verifyToken";



const router = Router()

const orderepo = new OrderRepo()  ;

const deleteOrderUsecase = new DeleteOrderUseCase(orderepo)  ;
const deleteOrderRoute = new DeleteOrderController(deleteOrderUsecase) ;


router.delete("/delete/order",verifyToken,(req:Request,res:Response) => {

    deleteOrderRoute.execute(req,res)
})



export default router ;