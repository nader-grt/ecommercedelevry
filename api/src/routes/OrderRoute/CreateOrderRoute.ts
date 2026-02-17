import { Request, Response, Router } from "express";
import OrderRepo from "../../repo/OrderRepo/OrderRepo";
import CreateOrderUseCase from "../../useCases/OrderUsecase/CreateOrderUseCase";
import CreateOrderController from "../../controllers/Orders/CreateOrderController";
import { verifyToken } from "../../middleware/verifyToken";
import { userRepo } from "../../repo/auth/userRepo/userRepo";

const router = Router();

const userepo = new userRepo();
const orderepo = new OrderRepo();
const createOrderUseCase = new CreateOrderUseCase(orderepo, userepo);

const createOrderRoute = new CreateOrderController(createOrderUseCase);

// admin

router.post(
  "/customers/:customerId/orders",
  verifyToken,
  (req: Request, res: Response) => {
    createOrderRoute.execute(req, res);
  }
);

export default router;
