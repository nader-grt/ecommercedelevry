import sequelize from "./../dbConfig/config";
import { UserModel } from "./user.js";
import { ProductModel } from "./product.js";
import { CategoriesModel } from "./category";
import { EmployeesModel } from "./Employee";
import { SupplierModel } from "./Suplliers";
import { SecretaryModel } from "./Secrtrie";
import { DelivererModel } from "./Delevery";
import { OrderModel } from "./Order";
import { OrderItemModel } from "./OrderItem";
import { DayWorkModel } from "./DayWork";
import { DelivererDayWorkModel } from "./DelivererDayWork";

// Initialize models
export const User = UserModel(sequelize);
export const Product = ProductModel(sequelize);
export const Category = CategoriesModel(sequelize);
export const Employee = EmployeesModel(sequelize);
export const Deliverer = DelivererModel(sequelize);
export const Secretary = SecretaryModel(sequelize);
export const Supplier = SupplierModel(sequelize);
export const Order = OrderModel(sequelize);
export const OrderItem = OrderItemModel(sequelize);
export const DayWork = DayWorkModel(sequelize);
export const DelivererDayWork= DelivererDayWorkModel(sequelize)

/* =========================
   Category - Product (1 : N)
========================= */
Category.hasMany(Product, { foreignKey: "categoryId", as: "products" });
Product.belongsTo(Category, { foreignKey: "categoryId", as: "category" });

/* =========================
   User - Order (1 : N)
========================= */
User.hasMany(Order, { foreignKey: "userId", as: "orders" });
Order.belongsTo(User, { foreignKey: "userId", as: "user" });

/* =========================
   Order - OrderItem (1 : N)
========================= */
Order.hasMany(OrderItem, { foreignKey: "orderId", as: "items" });
OrderItem.belongsTo(Order, { foreignKey: "orderId", as: "order" });

/* =========================
   Product - OrderItem (1 : N)
========================= */
Product.hasMany(OrderItem, { foreignKey: "productId", as: "orderItems" });
OrderItem.belongsTo(Product, { foreignKey: "productId", as: "product" });

/* =========================
   User - Employee (1 : 1)
========================= */
User.hasOne(Employee, { foreignKey: "userId", as: "employee" });
Employee.belongsTo(User, { foreignKey: "userId", as: "user" });

/* =========================
   Employee - Deliverer (1 : 1)
========================= */
Employee.hasOne(Deliverer, { foreignKey: "employeeId", as: "deliverer" });
Deliverer.belongsTo(Employee, { foreignKey: "employeeId", as: "employee" });

/* =========================
   Employee - Secretary (1 : 1)
========================= */
Employee.hasOne(Secretary, { foreignKey: "employeeId", as: "secretary" });
Secretary.belongsTo(Employee, { foreignKey: "employeeId", as: "employee" });

/* =========================
   User - Supplier (1 : 1)
========================= */
User.hasOne(Supplier, { foreignKey: "userId", as: "supplier" });
Supplier.belongsTo(User, { foreignKey: "userId", as: "user" });


/* =========================
   Deliverer - DayWork (N : N)
========================= */
Deliverer.belongsToMany(DayWork, {
  through: "deliverer_dayWorks",
  foreignKey: "delivererId",
  otherKey: "dayWorkId",
  as: "dayWorks",
});

DayWork.belongsToMany(Deliverer, {
  through: "deliverer_dayWorks",
  foreignKey: "dayWorkId",
  otherKey: "delivererId",
  as: "deliverers",
});

export { sequelize };
