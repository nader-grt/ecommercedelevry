import { Deliverer, Employee, User } from "../../models/main";
import IDelevryRepo from "./IDelevryRepo";



export default  class  DeleveryRepo   extends IDelevryRepo
{

    public     async   createDelevry(delevry :any):Promise<any>
    {


        try {
                
          const deliverer2 = await Deliverer.create(delevry
          );

        // const employee = await Employee.findOne({
        //     where: { userId: delevry.employeeId }
        //   });
      
        
        //   if (!employee) {
        //     throw new Error("Employee not found for this user");
        //   }
      
        
        //   const deliverer = await Deliverer.create({
        //     workingTime: delevry.workingTime,
        //     carType: delevry.carType,
        //     employeeId: employee.id, 
        //   });
      
          return deliverer2;
         } catch (error) {
            console.log(error) ;
            
         }

    }

    public     async   GetDelevryByID(id:number):Promise<any>
    {


        const  delivery  =  await  Deliverer.findOne( { where: { id: id } } ) ;
        if(delivery)
        {
           return delivery ;
        }
        return null ;


    }

    public  async      DeleteDelevryByID(delevryid:number,empId?:number,userid?:number):Promise<any>
    {  const delevry :any = await Deliverer.destroy( { where: { id: delevryid } } ) ;
      const  emp  =  await  Employee.destroy( { where: { id:empId } } ) ;
      await User.destroy({where :{id:userid}})

    }

    public  async     UpdateDelevryByID(delevry:any ,delevryid:number):Promise<any> 
    {

                 try {
                    const  delevryResult  =  await  Deliverer.update(  {

                workingTime: delevry.workingTime,
                carType  :  delevry.carType,
               employeeId:delevry.employeeId
                      },
                      { where: { id: delevryid} }) ;

                      if(delevryResult)
                      {
                        return delevryResult
                      }
                    return null ;
            
                 } catch (error) {
                    
                 }
    }

    static async FindDelevryById(userId:number):Promise<any>
    {
        
     try {
        

      const user = await User.findOne({
        where: { id: userId },
        include: [
          {
            association: "employee",
            include: [
              {
                association: "deliverer",
              },
            ],
          },
        ],
      });
    
      if (!user) return null;
    
      const result:any = user.get({ plain: true });
    
      return result;
     } catch (error) {
      
     }

    }

    public async getUserDelevredById(id: number): Promise<any> {
        try {
        
          const result = await User.findAll({
            attributes: [
              ["id", "TusersID"],
              "role",
              "firstName",
            ],
            include: [
              {
                model: Employee,
                attributes: [["id", "TempID"]],
                required: true, // INNER JOIN
              },
            ],
          });


        } catch (error) {
          console.error(error);
          throw error;
        }
      }

      public async getEmployeeIsDelevredById(id: number): Promise<any> {
        try {
          const result = await User.findOne({
            where: { id :id},
            attributes: [
              ["id", "TusersID"],
              "role",
              "firstName",
            ],
            include: [
              {
                association: "employee", // 
                attributes: [["id", "TempID"]],
                required: true,
              },
            ],
          });
      
          return result;
        } catch (error) {
          console.error(error);
          throw error;
        }
      }
      
      

}