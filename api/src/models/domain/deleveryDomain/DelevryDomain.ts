import EmployeesDomain from "../EmployeeDomain/EmployeeDomain";

export default class DelevryDomain extends EmployeesDomain
{



  //  protected daysOfWork: string = "";  //number

    private workingTime: string = "";
    private carType: string = "";
   private employeeId! :number ;

    constructor() {
        super();
      }
          
        //  public get getDaysOfWork():string
        //  {
        //     return this.daysOfWork ;
        //  }

        //  public set setDaysOfWork(value:string)
        //  {
        //      this.daysOfWork  = value ;
        //  }

         public get getWorkingTime():string
         {
            return  this.workingTime ;
         }

         public set setWorkingTime(value:string)
         {
        
             this.workingTime  = value ;
         }


         //work with image 
         public get getCarType():string
         {
            return this.carType ;
         }
    
    
         public set setCarType(value:string)
         {
             this.carType  = value;
         }

         set setDelevryId(value: number) {
            this.employeeId = value;
          }

         public toPersistence():any {
             return {

                workingTime: this.workingTime,
                carType  :  this.carType,
                employeeId:this.employeeId
             };
         }
}