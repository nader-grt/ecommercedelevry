import { Sequelize, DataTypes, Model } from "sequelize";

export interface ICategory {
  id?: number;
  name: string;
}

export class Category extends Model<ICategory> implements ICategory {
  public id!: number;
  public name!: string;

  public get getName(): string {
    return this.name;
  }

  public set setName(value: string) {
    this.name = value;
  }
}

export function CategoriesModel(sequelize: Sequelize) {
  Category.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },

      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      sequelize,
      tableName: "Categories",
      timestamps: false,
    }
  );

  return Category;
}
