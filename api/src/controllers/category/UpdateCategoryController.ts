import { Request, Response } from "express";
import { BaseController } from "../../infra/BaseCOntroller";
import UpdateCategoryUseCase from "../../useCases/categoryUseCase/UpdateCategoryUseCase";


 export interface ICategoryRequest 
{
      name:string; 
      categoryId:number;
}


export default class UpdateCategoryController extends BaseController
{

       

       private usecase!:UpdateCategoryUseCase ;
       constructor(updateCategoryUseCase:UpdateCategoryUseCase)
       {super() ;

              this.usecase = updateCategoryUseCase
       }

     
      protected async executeImpl(req: Request, res: Response): Promise<any> {
          const {name ,categoryId} = req.body ;




                      
                        if (!name || !categoryId) {
                          this.conflict(res, "Invalid input");
                          return;
                        }
          try {



             const dtoCategory :any = {
                  name ,categoryId
             }
                
      


                                           

                                   const result = await this.usecase.execute({ name, categoryId });
                                                    if (!result) {
                                                      return this.notFound(res, "Category not found");
                                                    }
                                              
                                                    this.ok(res, "Category updated successfully");
               
                      
          } catch (error) {
            console.log(error)
          }
      }
}