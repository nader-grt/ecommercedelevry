
export default class ProductDomain
{



    private name: string = "";

    private price: number = 0 ;
    private nameImage  : string = "";
    private   categoryId!: number;
    private supplierId!:number;

          
         public get getName():string
         {
            return this.name ;
         }

         public set setName(value:string)
         {
             this.name  = value ;
         }

         public get getPrice():number
         {
            return  this.price ;
         }

         public set setPrice(value:number)
         {
        
             this.price  = value ;
         }


         //work with image 
         public get getImageProduct():string
         {
            return this.nameImage ;
         }
    
    
         public set setImageProduct(value:string)
         {
             this.nameImage  = value;
         }

         public get getCategoryId():number
         {
            return this.categoryId ;
         }
    
    
         public set setCategoryId(value:string)
         {
             this.nameImage  = value;
         }

         public get getSupplierId():number
         {
            return this.supplierId ;
         }
    
    
         public set setSupplierId(value:number)
         {
             this.supplierId   = value;
         }
}