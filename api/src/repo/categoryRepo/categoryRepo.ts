import CategoryDomain from "../../models/domain/cetegoryDomain/CategoryDomaun";
import { Category } from "../../models/main";
import categoryRepoInterface from "./categoryRepoInterface";

export  interface ICategoryRepo  {
    name :string ;
}

export default class CategoryRepo extends categoryRepoInterface {


    public  async createCategory(category:ICategoryRepo):Promise<void> 
    { 
          
             try {
                await  Category.create(category)
             } catch (error) {
                console.log(error)
             }
    }


            static async isEmpty(): Promise<boolean> {
                return (await Category.count()) === 0;
            }


            static async FindCategoryById(id:number):Promise<any> {
                try {
                       const resultCategory :any =   await Category.findOne({
                            where :{id}
                          }) ;
                        const categoryResult  = new CategoryDomain() ;

                        if (!resultCategory) return null;

                         const categoryName = resultCategory.get({ plain: true });
                        
                          return categoryResult.getToResponseCategory(categoryName) ;
                } catch (error) {
                    console.log(error)
                }
            }
          
            public async GetCategoryById(id:number):Promise<any> {
                try {
                    const updatedCategory = await Category.findOne({ where: { id } });
                    const categoryResult  = new CategoryDomain() ;

                    if (!updatedCategory) return null;


                    
                     return categoryResult.getToResponseCategory(updatedCategory.dataValues) ;
                } catch (error) {
                    console.log(error)
                }
            }
            public async UpdateCategoryById(category:any):Promise<any> {
              
                const t = await Category.sequelize!.transaction();
                try {
                    
                   

                           const { id, name } = category;

                           // [affectedCount, affectedRows]
                           const [resultCategoryCount] = await Category.update(
                               { name },
                               {
                                   where: { id },
                                   transaction: t 
                                  // returning: true // for fetch all rwos after updated
                               }
                           );
                       
                          

                      
                           const updatedCategory = await Category.findOne({ where: { id },    transaction: t });
                       
                       
                       
                      //     return { affectedCountCategory, affectedRowsCategory };

                      await t.commit();
                           const categoryResult  = new CategoryDomain() ;

                           if (!updatedCategory) 
                           {
                            await t.rollback();
                            return null;
   
                           }
                            
                          
  
                           
                            return categoryResult.getToResponseCategory(updatedCategory.dataValues) ;
                } catch (error) {
                    await t.rollback();
                    console.log(error)
                }
            }
            public async GetAllCategories():Promise<any> {
                try {
                     const allCategories  =      await Category.findAll({
                        raw:true
                     }) ;

                    // console.log("alllllll ",allCategories)

                     const categories = new CategoryDomain() ;

                    //  if(allCategories)
                    //  {


                    //  }  
               
                 return     categories.GetAllCategoriesByName(allCategories)
                } catch (error) {
                    console.log(error)
                }
            }



            public async DeleteCategoryById(id :number):Promise<any> 
            {
                 try {
                       const result = await       Category.destroy({
                                where :{id:id}
                              }) 
                           

                             return result ;
                 } catch (error) {
                    console.log(error)
                 }

            }
}