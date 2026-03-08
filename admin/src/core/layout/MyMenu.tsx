import { Menu } from 'react-admin';



const MyMenu = () => (
  <Menu>
    <Menu.Item to="/" primaryText="Dashboard" />
    <Menu.Item to="/users" primaryText="Users"  />
    <Menu.Item to="/products" primaryText="products" />
    <Menu.Item to="/orders" primaryText="orders" />
    {/* <Menu.ResourceItem  name=""    /> */}
        <Menu.Item to="/category" primaryText="category" />
  </Menu>
);

export default MyMenu;