import { Request, Response } from "express";
import { BaseController } from "../../infra/BaseCOntroller";
import DeleteCategoryUseCase from "../../useCases/categoryUseCase/DeleteCategoryUseCase";





export default class DeleteCategoryController extends BaseController
{


       private usecase!:DeleteCategoryUseCase
       constructor(deleteCategoryUseCase:DeleteCategoryUseCase)
       {
          super() ;

          this.usecase = deleteCategoryUseCase  
       }



      protected async executeImpl(req: Request, res: Response): Promise<any> {
          
          const {id}  = req.params ;
          const categoryId :number = Number(id)  ;


            try {
                         const category   =    await this.usecase.execute(categoryId)  ;

                         if (!category) {
                              return this.notFound(res, `Category with id ${categoryId} not found`);
                          }
                  
                          this.ok(res, "Category deleted successfully");

                        
                              

            } catch (error) {
                  console.log(error)
            }
      }
}