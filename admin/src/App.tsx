import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Admin, Resource } from "react-admin";

import authProvider from "./core/providers/authProvider";
import dataProvider from "./core/providers/dataProvider";

import MyLayout from "./core/layout/MyLayout";
import Dashboard from "./dashboard/Dashboard";

import { RegisterPage } from "./auth/pages/RegisterPage";
import { LoginPage } from "./auth/pages/LoginPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/*"
          element={
            <Admin
             // dataProvider={dataProvider}
              authProvider={authProvider}
              dashboard={Dashboard}
            //  layout={MyLayout}
            >
              {/* <Resource name="users" /> */}

              <Resource name="dashboard" list={Dashboard} />
            </Admin>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;