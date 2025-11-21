import { Sequelize, DataTypes, Model, Optional } from "sequelize";

// Attributes interface
export default  interface IUser {
  id?: number;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
}

// Optional fields when creating a new user
interface UserCreationAttributes extends Optional<IUser, "id"> {}

// Sequelize model class with getters and setters
export class User extends Model<IUser, UserCreationAttributes>
  implements IUser {

  // Private fields for getters/setters
  private _id!: number;
  private _firstName!: string;
  private _lastName!: string;
  private _phone!: string;
  private _email!: string;

  // Sequelize-required public fields
  public id!: number;
  public firstName!: string;
  public lastName!: string;
  public phone!: string;
  public email!: string;

  // Getters
  get getId(): number {
    return this._id ?? this.id;
  }

  get getFirstName(): string {
    return this._firstName ?? this.firstName;
  }

  get getLastName(): string {
    return this._lastName ?? this.lastName;
  }

  get getPhone(): string {
    return this._phone ?? this.phone;
  }

  get getEmail(): string {
    return this._email ?? this.email;
  }

  // Setters
  set setId(value: number) {
    this._id = value;
    this.id = value;
  }

  set setFirstName(value: string) {
    this._firstName = value;
    this.firstName = value;
  }

  set setLastName(value: string) {
    this._lastName = value;
    this.lastName = value;
  }

  set setPhone(value: string) {
    this._phone = value;
    this.phone = value;
  }

  set setEmail(value: string) {
    this._email = value;
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
    },
    {
      sequelize,
      tableName: "Users",
      timestamps: false,
    }
  );

  return User;
}
