import { Request, Response } from "express";
import { BaseController } from "../../infra/BaseCOntroller";
import GetAllCategoriesUseCase from "../../useCases/categoryUseCase/GetAllCategoriesUseCase";



export default class GetAllCategoriesController extends BaseController
{


   
  private usecase!:GetAllCategoriesUseCase;
       constructor(getAllCategoriesUseCase:GetAllCategoriesUseCase)
       {super() ;

             
              this.usecase = getAllCategoriesUseCase
       }

    protected async executeImpl(req: Request, res: Response): Promise<any> {
        

                try {
                       const categoriesName =      await this.usecase.execute()  ;

                       if(categoriesName.length === 0)
                       {
                        return this.notFound(res,"empty catygories ") ;
                       }

                       return this.resultValue(res,"all categories ",categoriesName) ;
                } catch (error) {
                    console.log(error)
                }
    }
}