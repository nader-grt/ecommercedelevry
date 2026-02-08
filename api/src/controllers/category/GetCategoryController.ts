import { Request, Response } from "express";
import { BaseController } from "../../infra/BaseCOntroller";
import CategoryDomain from "../../models/domain/cetegoryDomain/CategoryDomaun";
import CategoryRepo from "../../repo/categoryRepo/categoryRepo";
import { RequestAuth } from "../../middleware/verifyToken";






export default class GetCategoryController extends BaseController
{
      public _categoryRepo : CategoryRepo ;// prepare repo to use its methods
      public  _categoryDomain : CategoryDomain  // prepare from request body

       constructor()
       {super() ;

              this._categoryRepo = new CategoryRepo() ;// prepare repo to use its methods
              this._categoryDomain = new CategoryDomain() // prepare from request body
       }
      protected async executeImpl(req: Request, res: Response): Promise<any> {
          const {id} = req.params ;
            const  categoryId :number = Number(id)
            console.log("categoryId    ",categoryId)
                      try {

                        console.log(" req get category  " ,req )
                        const resultCategory :any = await CategoryRepo.FindCategoryById(categoryId) ;

                        console.log("*******  category  controller    is  " ,resultCategory)

                        if(resultCategory)
                        {
                              return this.resultValue(res," find category by success ",resultCategory)
                        }else
                        {
                              return this.notFound(res,"not found category ")
                        }
                      } catch (error) {
                        console.log(error)
                      }
      }
}