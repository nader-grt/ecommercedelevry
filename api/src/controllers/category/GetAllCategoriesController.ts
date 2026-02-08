import { Request, Response } from "express";
import { BaseController } from "../../infra/BaseCOntroller";
import CategoryRepo from "../../repo/categoryRepo/categoryRepo";
import CategoryDomain from "../../models/domain/cetegoryDomain/CategoryDomaun";



export default class GetAllCategoriesController extends BaseController
{


    public _categoryRepo : CategoryRepo ;// prepare repo to use its methods
      public  _categoryDomain : CategoryDomain  // prepare from request body

       constructor()
       {super() ;

              this._categoryRepo = new CategoryRepo() ;// prepare repo to use its methods
              this._categoryDomain = new CategoryDomain() // prepare from request body
       }

    protected async executeImpl(req: Request, res: Response): Promise<any> {
        

                try {
                       const categoriesName =      await this._categoryRepo.GetAllCategories()  ;

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