// models/index.ts
import sequelize from "./../dbConfig/config";
import { UserModel } from "./user.js";
import { ProductModel } from "./product.js";
import { CategoriesModel } from "./category";
// import { CategoryModel } from "./category.js";
// import { ProductModel } from "./product.js";
// import { OrderModel } from "./order.js";
// import { OrderItemModel } from "./orderItem.js";

// Initialize models
export const User = UserModel(sequelize);

export const Product = ProductModel(sequelize);

export const Category = CategoriesModel(sequelize);



//  Category.create({name:"Electronics"})
// export const Order = OrderModel(sequelize);
// export const OrderItem = OrderItemModel(sequelize);

// Associations
// Product.belongsTo(Category, { foreignKey: "categoryId" });
// Category.hasMany(Product, { foreignKey: "categoryId" });

// Order.belongsTo(User, { foreignKey: "userId" });
// User.hasMany(Order, { foreignKey: "userId" });

// OrderItem.belongsTo(Order, { foreignKey: "orderId" });
// Order.hasMany(OrderItem, { foreignKey: "orderId" });

// OrderItem.belongsTo(Product, { foreignKey: "productId" });
// Product.hasMany(OrderItem, { foreignKey: "productId" });

// Named export for sequelize
export { sequelize };
