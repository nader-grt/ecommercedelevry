
export default class ProductDomain
{

  //  private _id :number = 0;

    private name:string = "";

    private price:number = 0 ;

          
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
}