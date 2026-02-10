import CategoryRepo from "../../repo/categoryRepo/categoryRepo";




export default class GetCategoryUseCase  
{

        private usecaseRepo:CategoryRepo
    constructor( categoryRepo:CategoryRepo)
    {
        this.usecaseRepo = categoryRepo 
    }
      
    async execute(id:number):Promise<any>
    {


        console.log("usecaseeeeeee  ",Number(id)  ,"idddddddddddd  ",id)
              try {
                           
                const resultCategory :any = await CategoryRepo.FindCategoryById(id) ;

               console.log("result usecaseee  ",resultCategory)

                return resultCategory ;
              } catch (error) {
                console.log(error)
              }
    }
}