import { Deliverer, Employee, User } from "../../models/main";
import IDelevryRepo from "./IDelevryRepo";



export default  class  DeleveryRepo   extends IDelevryRepo
{

    public     async   createDelevry(delevry :any):Promise<any>
    {


        try {
                
        //    await  Deliverer.create(delevry)



        const employee = await Employee.findOne({
            where: { userId: delevry.employeeId }
          });
      
          // 2️تحقق أولًا
          if (!employee) {
            throw new Error("Employee not found for this user");
          }
      
          // 3️ أنشئ Deliverer باستخدام employee.id
          const deliverer = await Deliverer.create({
            workingTime: delevry.workingTime,
            carType: delevry.carType,
            employeeId: employee.id, // الصحيح
          });
      
          return deliverer;
         } catch (error) {
            console.log(error) ;
            
         }

    }

    public     async   GetDelevryByID(id:number):Promise<any>
    {



    }

    public  async      DeleteDelevryByID(id:number):Promise<any>
    {

    }

    public  async     UpdateDelevryByID(id:number):Promise<any> 
    {


    }

    public async getUserDelevredById(id: number): Promise<any> {
        try {
         /*   const user = await User.findOne({
                where: { id },
                include: [
                  {
                    model: Employee,
                    as: "employee",
                    required: true, // INNER JOIN
                    include: [
                      {
                        model: Deliverer,
                        as: "deliverer",
                        required: true, // INNER JOIN
                      },
                    ],
                  },
                ],
              });
      
          return user; // null*/

          const user = await User.findOne({
            where: {
              id: id,
              role: 'deliverer',
            },
          });


        } catch (error) {
          console.error(error);
          throw error;
        }
      }

}