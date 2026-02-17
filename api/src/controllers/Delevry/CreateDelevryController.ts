import { Request, Response } from "express";
import { BaseController } from "../../infra/BaseCOntroller";
import DeleveryRepo from "../../repo/delevryRepo/DeleveryRepo";
import DelevryDomain from "../../models/domain/deleveryDomain/DelevryDomain";
import userDomain from "../../models/domain/auth/user/userDomain";

import { userRepo } from "../../repo/auth/userRepo/userRepo";
import { RequestAuth } from "../../middleware/verifyToken";
import EmployeeRepo from "../../repo/employeeRepo/EmployeeRepo";

export default interface IDelevry {
  carType: string;
  employeeId?: number;
}

export default class CreateDelevryController extends BaseController {
  protected _DeleveryRepo: DeleveryRepo;

  protected _DelevryDomain: DelevryDomain;
  protected _userDomain: userDomain;
  protected _delevryUserRepo: userRepo;

  private async _ReadDelevry(delevryRequest: IDelevry): Promise<any> {
    return {
      carType: (this._DelevryDomain.setCarType = delevryRequest.carType),
      employeeId: delevryRequest.employeeId,
    };
  }

  private createDelevryDomain(
    delevryRequest: IDelevry,
    employeeId: number
  ): DelevryDomain {
    const delevry = new DelevryDomain();

    delevry.setCarType = delevryRequest.carType;
    delevry.setDelevryId = employeeId;

    return delevry;
  }

  constructor() {
    super();
    this._DeleveryRepo = new DeleveryRepo();
    this._DelevryDomain = new DelevryDomain();
    this._userDomain = new userDomain();
    this._delevryUserRepo = new userRepo();
  }

  protected async executeImpl(req: RequestAuth, res: Response): Promise<any> {
    const { carType, employeeId } = req.body;
    const delevryIdEmp = Number(employeeId);

    const dtoDelevry: any = {
      delevryIdEmp,
      carType,
    };

    const resultDelevryDTO = await this._ReadDelevry(dtoDelevry);

    let delevryDomain: any;
    let userIsDelevry: any;
    //  let empDelevry:any ;

    try {
      userIsDelevry = await this._DeleveryRepo.getUserDelevredById(
        delevryIdEmp
      );

      if (userIsDelevry[0]?.EmployeeID === delevryIdEmp) {
        return this.resultValue(
          res,
          ` delevery exist befor by ${delevryIdEmp}`
        );
      }

      const existEmp = await EmployeeRepo.FindEmployeeBeforeByEmpId(
        Number(delevryIdEmp)
      );

      if (!existEmp) {
        return this.resultValue(
          res,
          `employee not found yet by this  number  ${delevryIdEmp}`
        );
      }

      const idsUserTypeRole: number[] =
        await EmployeeRepo.FindAllIdsExistWithEmp();

      if (idsUserTypeRole.length == 0) {
        return this.notFound(res, " ids  of role   not fount  ");
      }
      const [idSecrtrie, idDeliverer] = idsUserTypeRole;

      const resultUserDelevry: any = await EmployeeRepo.getEmpUsersByRole(
        "deliverer"
      );

      if (!idsUserTypeRole.includes(resultUserDelevry[0].DelivererId)) {
        return this.notFound(res, " DelivererId    not fount by this  role ");
      }

      if (idDeliverer) {
        //idDeliverer

        delevryDomain = await this.createDelevryDomain(
          resultDelevryDTO,
          delevryIdEmp
        );
      }

      //   await this._DeleveryRepo.createDelevry(delevryDomain)

      //  this.ok(res, { message: "delevry  created  successfully" });
    } catch (error) {
      console.log(error);
    }
  }
}
