import { BaseController } from "../../infra/BaseCOntroller";
import { Request, Response } from "express";
import ProductRepo from "../../repo/productRepo/productRepo";
import CategoryRepo from "../../repo/categoryRepo/categoryRepo";
import CategoryDomain from "../../models/domain/cetegoryDomain/CategoryDomaun";

export  default class createCategoryController  extends  BaseController
{

        public categoryRepo : CategoryRepo ;// prepare repo to use its methods
        public  categoryDomain : CategoryDomain  // prepare from request body

        constructor( )
        {
            super() ;
            this.categoryRepo = new CategoryRepo() ;
            this.categoryDomain = new CategoryDomain() ;
        }

    protected async executeImpl(req:Request,res:Response): Promise<void> {
                const {name}  = req.body ;


             try {
                
                if(!name || name.length ===0) {
                    this.conflict(res,"Invalid name") ;
                    return ;
                }

                 
                  this.categoryDomain.setName = name ;

             
           await this.categoryRepo.createCategory({name}) ;

                    this.ok(res,"category created successfully") ;
             } catch (error) {
                console.log(error) ;
                
             }
    }
}