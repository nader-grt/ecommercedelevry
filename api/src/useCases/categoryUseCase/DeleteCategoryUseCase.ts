import CategoryRepo from "../../repo/categoryRepo/categoryRepo"




export default class DeleteCategoryUseCase {


         usecaseRepo!:CategoryRepo
         constructor(categoryRepo:CategoryRepo)
         {
           this.usecaseRepo = categoryRepo
         }


         async execute(categoryId:number):Promise<any>
         {

                  try {
                    const category = await this.usecaseRepo.GetCategoryById(categoryId);

                    if (!category) return false;
                
                    await this.usecaseRepo.DeleteCategoryById(categoryId);
                    return true;
                  } catch (error) {
                    console.log(error)
                  }
         }
}