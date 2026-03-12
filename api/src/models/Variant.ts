import { Model, Sequelize } from "sequelize";



export default interface IIVariant
{

}


export class Variant extends Model<IIVariant> implements IIVariant
{

}



export function VariantModel(sequelize:Sequelize)
{
    Variant.init({


    },{
        
        sequelize,
        tableName:"",
        timestamps:true


    })

    return Variant ;
}