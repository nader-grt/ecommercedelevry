import { Request, Response, Router } from "express";
import OrderRepo from "../../repo/OrderRepo/OrderRepo";
import CreateOrderUseCase from "../../useCases/OrderUsecase/CreateOrderUseCase";
import CreateOrderController from "../../controllers/Orders/CreateOrderController";
import { verifyToken } from "../../middleware/verifyToken";



const router = Router() ;

  const orderepo = new OrderRepo() ;
  const createOrderUseCase = new CreateOrderUseCase(orderepo) ;

  const createOrderRoute = new CreateOrderController(createOrderUseCase) ;

// custmer 

  router.post("/me/orders",verifyToken,(req:Request,res:Response) => {

    createOrderRoute.execute(req,res) ;
  })


export default router ;