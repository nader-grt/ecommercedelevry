import { Request, Response } from "express";
import { BaseController } from "../../infra/BaseCOntroller";
import CategoryRepo from "../../repo/categoryRepo/categoryRepo";
import CategoryDomain from "../../models/domain/cetegoryDomain/CategoryDomaun";


interface ICategoryRequest 
{
      name:string; 
      categoryId?:number;
}


export default class UpdateCategoryController extends BaseController
{

           private _ReadCategoryUpdate(categoryRequest :ICategoryRequest)
           {
               const category = new CategoryDomain() ;

               category.setName = categoryRequest.name ;

               return category ;

           }

      public _categoryRepo : CategoryRepo ;// prepare repo to use its methods
      public  _categoryDomain : CategoryDomain  // prepare from request body

       constructor()
       {super() ;

              this._categoryRepo = new CategoryRepo() ;// prepare repo to use its methods
              this._categoryDomain = new CategoryDomain() // prepare from request body
       }

     
      protected async executeImpl(req: Request, res: Response): Promise<any> {
          const {name ,categoryId} = req.body ;

          try {

             const dtoCategory :any = {
                  name ,categoryId
             }
                
              let reqCategory :any = this._ReadCategoryUpdate(dtoCategory) ;


            const resultCategory :any = await CategoryRepo.FindCategoryById(Number(categoryId)) ;
                      
            console.log("******* update controller ",Object.keys(resultCategory).length  ,"resultCategory ",resultCategory)
                 if(Object.keys(resultCategory).length === 0)
                 {
                    return this.notFound(res,"category can not update ")
                 }

                 if(categoryId !== resultCategory.id)
                  {
             
                        return this.notFound(res,`categoryId ${categoryId}  not found  `)
                  }

                 if(name)
                 {
                  resultCategory.name = reqCategory.getName ;

                 }
                          //console.log(" resultCategory  1  ",resultCategory  ,"reqCategory  2  ",reqCategory)
                      const updatedCategory :any =           await      this._categoryRepo.UpdateCategoryById(resultCategory) ;

                      if(updatedCategory)
                      {

                       // console.log("upppppppppppppp  ",updatedCategory)  ;

                        return this.resultValue(res,"category updated ",updatedCategory) ;
                      }
          } catch (error) {
            console.log(error)
          }
      }
}