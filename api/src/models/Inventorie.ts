import { Model, Sequelize } from "sequelize";



export default interface IInventorie
{

}



export class Inventorie extends Model<IInventorie> implements IInventorie
{


}


export function InventorieModel(sequelize:Sequelize)
{   
    Inventorie.init({


},{
sequelize,  
tableName:"",
timestamps:true

})


    return Inventorie
}