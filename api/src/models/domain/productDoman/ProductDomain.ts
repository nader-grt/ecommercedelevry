
export default class ProductDomain
{



    private name: string = "";

    private price: number = 0 ;
    private nameImage!: string ;
    private   categoryId!: number;
    private supplierId!:number;


    constructor(props?: {
        name: string;
        price: number;
        nameImage: string;
      
      }) {
       // super();
    
        if (props) {
          this.price = props.price;
          this.name = props.name;
          this.nameImage = props.nameImage;
          
        }
      }
          
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
            if (value <= 0) {
                throw new Error("Price must be greater than zero");
              }
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
    
    
        //  public set setCategoryId(value:number)
        //  {
        //      this.categoryId  = value;
        //  }

         public get getSupplierId():number
         {
            return this.supplierId ;
         }
    
    
        //  public set setSupplierId(value:number)
        //  {
        //      this.supplierId   = value;
        //  }
}