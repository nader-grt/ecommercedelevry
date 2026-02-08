import { Request, Response } from "express";
import { BaseController } from "../../infra/BaseCOntroller";
import CategoryRepo from "../../repo/categoryRepo/categoryRepo";
import CategoryDomain from "../../models/domain/cetegoryDomain/CategoryDomaun";





export default class DeleteCategoryController extends BaseController
{


      public _categoryRepo : CategoryRepo ;// prepare repo to use its methods
      public  _categoryDomain : CategoryDomain  // prepare from request body

       constructor()
       {super() ;

              this._categoryRepo = new CategoryRepo() ;// prepare repo to use its methods
              this._categoryDomain = new CategoryDomain() // prepare from request body
       }
      protected async executeImpl(req: Request, res: Response): Promise<any> {
          const {id}  = req.params ;
          const categoryId :number = Number(id)  ;


            try {
                         const category   =    await this._categoryRepo.GetCategoryById(categoryId)  ;

                         console.log("object cccccccccccc    ",category  ,categoryId)

                         if(category === null)
                              {
                                   return this.notFound(res,`can not delete this categoryid  ${categoryId} not found `)
                              }
                         if(category.id !== categoryId)
                         {
                              return this.notFound(res,`can not delete this category id ${categoryId}`)
                         }

                              const resultDeletedCategory       =  await this._categoryRepo.DeleteCategoryById(categoryId)  ;

                             
                               if(resultDeletedCategory)
                              {

                                 //   console.log("rrrrrrrrrrrrrr  ",resultDeletedCategory )
                                       return this.ok(res,"delete with success ")
                              }

            } catch (error) {
                  console.log(error)
            }
      }
}