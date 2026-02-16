import { Request, Response } from "express";
import { BaseController } from "../../infra/BaseCOntroller";
import RefreshTokenUseCase from "../../useCases/Auth/RefreshTokenUseCase";


export default class RefreshTokenController extends BaseController {
  private refreshUseCase: RefreshTokenUseCase;

  constructor(refreshUseCase: RefreshTokenUseCase) {
    super();
    this.refreshUseCase = refreshUseCase;
  }

  protected async executeImpl(req: Request, res: Response) {
    try {
      const { refreshToken } = req.body;
      const result = await this.refreshUseCase.execute(refreshToken);
      return res.status(200).json(result);
    } catch (err: any) {
      return this.unauthorized(res, err.message);
    }
  }
}
