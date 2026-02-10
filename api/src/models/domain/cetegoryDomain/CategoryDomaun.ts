
export interface ICategoryResponseDomain {
categoryId:number;
name:string ;
}


export default class CategoryDomain
{

  //  private _id :number = 0;

    private name: string = "";

   private categoryId!:number ;

          
         public get getName():string
         {
            return this.name ;
         }

         public set setName(value:string)
         {
             this.name  = value ;
         }

         public get getCategoryId():number
         {
            return this.categoryId ;
         }


         public set setCategoryId(value:number)
         {
             this.categoryId = value;
         }
       

        public getToResponseCategory(data?:any)
        {
          return {
              id:data.id ,
              name :data.name
          }
        }


        public createCategoryToPersistance()
        {
          return {
              id:this.categoryId ,
              name :this.name
          }
        }


        public async GetAllCategoriesByName(data?:any):Promise<ICategoryResponseDomain[]>
        {  

                const  categoriesNames : any = await  data.map((e:any)=> {
                         
                  return {
                    categoryId:e.id,
                    name : e?.name
                    
                  }
                   
               })


          return categoriesNames
        }
       
}