import { Model, Sequelize } from "sequelize";


export interface IInventoryMovement
{

}

export class InventoryMovement extends Model<IInventoryMovement> implements IInventoryMovement
{


}


export function InventoryMovementModel(sequelize:Sequelize)
{

    InventoryMovement.init({

        
    },{
        sequelize,
        tableName:"",
        timestamps: true,
    })


    return InventoryMovement
}