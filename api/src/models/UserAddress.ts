import { Model, Sequelize } from "sequelize";

export default interface IUserAddress
{


}


export class UserAddress extends Model<IUserAddress> implements IUserAddress
{


}


export function UserAddressModel(sequelize:Sequelize)
{

    UserAddress.init({


    },{sequelize,tableName:"",timestamps:true})

    return UserAddress ;
}