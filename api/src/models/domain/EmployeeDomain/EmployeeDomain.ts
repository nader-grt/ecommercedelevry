import userDomain from "../auth/user/userDomain";

export default class EmployeesDomain extends userDomain
{

    private salary!:number ;
      private hiredAt!: Date ;
      private userId!: number;
      
      constructor() {
        super();
      }

      public get getSalary():number
      {
        return this.salary ;
      }
      public set setSalary(salary :number)
      {
         this.salary = salary;
      }
      public get sethiredAt():Date
      {
        return this.hiredAt ;
      }
      public set sethiredAt(hireAt :Date)
      {
         this.hiredAt = hireAt;
      }


      set setUserId(value: number) {
        this.userId = value;
      }
    
      public toPersistence():any {
        return {
          salary: this.salary,
          hiredAt: this.hiredAt,
          userId: this.userId,
        };
      }
}