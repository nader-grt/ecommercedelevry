import { Request, Response, Router } from "express";
import OrderWithDeliverieRepo from "../../repo/OrderWithDeliverieRepo/OrderWithDeliverieRepo";
import AssignDeliveryUseCase from "../../useCases/OrderWithDeliveriesUseCase/AssignDeliveryUseCase";
import AssignDeliveryController from "../../controllers/OrderWithDeliveries/AssignDeliveryController";
import { verifyToken } from "../../middleware/verifyToken";

const router = Router()

const orderWithDeliverieRepo        = new OrderWithDeliverieRepo() ;
const assignDeliveryUseCase  = new AssignDeliveryUseCase(orderWithDeliverieRepo)
const assignDeliveryRoute =   new AssignDeliveryController(assignDeliveryUseCase)

router.patch("/admin/deliveries/:deliveryId/assign",verifyToken,(req:Request,res:Response) => {
//deliveryPersonId
  assignDeliveryRoute.execute(req,res) ;
})

export default router