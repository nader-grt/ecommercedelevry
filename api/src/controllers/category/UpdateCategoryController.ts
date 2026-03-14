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
          const {id} = req.params
          const categoryId  = Number(id)
          const {name } = req.body ;


console.log(" {name ,categoryId}  ", {name ,categoryId})

                      
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

                                                    console.log("uupppp ffffinallll  ",result)
                                              
                                                    this.resultValue(res, "Category updated successfully",result);
               
                      
          } catch (error) {
            console.log(error)
          }
      }
}