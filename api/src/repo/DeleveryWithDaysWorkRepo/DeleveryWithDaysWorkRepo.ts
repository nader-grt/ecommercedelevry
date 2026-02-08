import {  DelivererDayWork, sequelize } from "../../models/main";

import IDelivererDayWork from "../../models/DelivererDayWork";
import IDeleveryWithDaysWorkRepo from "./IDeleveryWithDaysWorkRepo";
import { QueryTypes } from "sequelize";




export default class DeleveryWithDaysWorkRepo extends IDeleveryWithDaysWorkRepo
{

    public async CreateDeleveryWithDaysWork(payload: IDelivererDayWork,deleveryId?:number):Promise<any>
    {
        const t = await sequelize.transaction();
           try {

         
            const payloadMapper = {
                delivererid: payload.delivererid,
                dayWorkid: payload.dayWorkid,
                nbrHours: payload.nbrHours,
              };  //nbrHours

            //   const {
            //     nbrHours,
            //     delivererid,
            //     dayWorkid,
            //   } = payload;
            const result = await DelivererDayWork.create(
                payloadMapper,
                { transaction: t }
              );
          
              await t.commit();
            
              return result.get({ plain: true }) ;;

           } catch (error) {
            await t.rollback()
              console.log(error)
           }
    }

    public static async FindDelivererDayWorkBefore(deliveryid?:number ,dayWorkid?:number):Promise<boolean | any>
    {
                 try {
                    const exists = await DelivererDayWork.findOne({
                        where: {
                            delivererid:deliveryid,
                          dayWorkid
                        },
                      });
                    return exists ? true :false
                 } catch (error) {
                    console.log(error)
                 }
                    
    }


    public  async GetDeliveryInfo(): Promise<any> {
        
                     try {
                        const result = await sequelize.query(
                            'SELECT * FROM vw_deliverer_dayworks',
                            { type: QueryTypes.SELECT }
                          );
                         console.log("view result   ",result)
                          return result
                     } catch (error) {
                         console.log(error)
                     }
    }


    public  async GetDeliveryAllInfo(): Promise<any> {
        
      try {
              const result = await sequelize.query(
                  'SELECT * FROM view_deliverer_work_days',
                  { type: QueryTypes.SELECT }
                );
                console.log("view result   ",result)
                return result
          } catch (error) {
              console.log(error)
          }
    }

    public async GetDeliveryBydeleveryId_dayworkId(id:number):Promise<any> 
    {
           try {
            const result = await DelivererDayWork.findOne({
              where :{id},
              raw:true
            })

            return result === null ? null :result
           } catch (error) {
               console.log(error)
           }
    }
          public async UpdateDeleveryWithDaysWork(updatedeliveryDay :any ,deleveryId_dayworkId?:number):Promise<any>
          {
            const t = await sequelize.transaction();
                       try {
                         

                        await DelivererDayWork.update({

                        },
                        {
                          where:{}
                        }
                      )




                          await t.commit() ;

                          return null
                         
                       } catch (error) {
                        await t.rollback()
                          console.log(error)
                       }
          }

}