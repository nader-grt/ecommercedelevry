import { Sequelize, DataTypes, Model } from "sequelize";


export enum Role {
  ADMIN = "ADMIN",
  USER = "USER",
  Supplier= "Supplier",
}
//  E RD   DIAGRAM ENTITY RELATIONSHIP 

//5  STEP 

/**
 * 
 * 

STEP 1  IDENTIFY ENTITY 

STEP 2  EXIST RELATIONSHIP  BETWEEN ENTITIES 

STEP 3  TYPE OF RELATIONSHIP one to one  or one to many  many to one  many to many  selef refrenceing 

STEP 4  CARDINALITY ORDINARITY  ( MIN AND MAX   (OPTIONAL  OR MANDATRY OR REQUIRED)

STEP 5 ATTRIBUTES  )













 */
// Attributes interface
export default  interface IUser {
  id?: number;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  password?:string ;
  role?:Role ;
  city?:string ;
  address?:string ;
}




export class User extends Model<IUser>
  implements IUser {




  // Sequelize-required public fields
  public id!: number;
  public firstName!: string;
  public lastName!: string;
  public phone!: string;
  public email!: string;

  // Getters
  get getId(): number {
    return this.id ;
  }

  get getFirstName(): string {
    return  this.firstName;
  }

  get getLastName(): string {
    return  this.lastName;
  }

  get getPhone(): string {
    return  this.phone;
  }

  get getEmail(): string {
    return  this.email;
  }

  // Setters
 

  set setFirstName(value: string) {
   
    this.firstName = value;
  }

  set setLastName(value: string) {
  
    this.lastName = value;
  }

  set setPhone(value: string) {
  
    this.phone = value;
  }

  set setEmail(value: string) {
   
    this.email = value;
  }

  // Custom method
  public fullName(): string {
    return `${this.getFirstName} ${this.getLastName}`;
  }
}

// Initialize model
export function UserModel(sequelize: Sequelize) {
  User.init(
    {
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      firstName: { type: DataTypes.STRING, allowNull: false },
      lastName: { type: DataTypes.STRING, allowNull: false },
      phone: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: false, unique: true },
       password: { type: DataTypes.STRING, allowNull: false },
      // role: { type: DataTypes.ENUM(...Object.values(Role)), allowNull: false },
      role: {
        type: DataTypes.ENUM("ADMIN", "USER", "Supplier"),
        values: Object.values(Role),
        allowNull: false,
        defaultValue: Role.USER,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      sequelize,
      tableName: "Users",
      timestamps: false,
    }
  );

  return User;
}
