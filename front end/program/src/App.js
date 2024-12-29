import React from "react";
import Home from "./Pages/Home/Home";
import ProductsPage from "./Pages/Products/ProductsPage";
import CartPage from "./Pages/Cart/CartPage";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import UserProfilePage from "./Pages/User/UserProfilePage";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllProductPage from "./Pages/Admin/AllProductPage";
import CategoriesPage from "./Pages/Admin/CategoriesPage";
import AddCategoryPage from "./Pages/Admin/AddCategoryPage";
import AddProductPage from "./Pages/Admin/AddProductPage";
import EditeProduct from "./Pages/Admin/EditeProduct";
import ForgetPassword from "./Pages/Auth/ForgetPassword";
import VerifyCode from "./Pages/Auth/VerifyCode";
import ResetPassword from "./Pages/Auth/ResetPassword";
import ProtectedRouteHook from "./Hook/Auth/protected-route-hook";
import ProtectedRoute from "./Components/Auth/ProtectedRoute";
import CheckoutPage from "./Pages/Checkout/CheckoutPage";
import UserOrdersPage from "./Pages/User/UserOrdersPage";


function App() {

  const [isUser, isAdmin, userData] = ProtectedRouteHook()


  return (
    <div className="App">


      <BrowserRouter>
        <Routes>

          <Route index element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />


          <Route path='/products' element={<ProductsPage />} />


          <Route element={<ProtectedRoute Auth={isUser} url='/login' />} >
            <Route path='/cart' element={<CartPage />} />
            <Route path='/order/paymethod' element={<CheckoutPage />} />
            <Route path='/user/profile' element={<UserProfilePage />} />
            <Route path='/user/orders' element={<UserOrdersPage />} />
            <Route path='/user/forget-password' element={<ForgetPassword />} />
            <Route path='/user/verify-code' element={<VerifyCode />} />
            <Route path='/user/reset-password/:id' element={<ResetPassword />} />
          </Route>

          <Route element={<ProtectedRoute Auth={isAdmin} url='/' />} >
            <Route path='/admin/allProduct' element={<AllProductPage />} />
            <Route path='/admin/allCategory' element={<CategoriesPage />} />
            <Route path='/admin/addCategory' element={<AddCategoryPage />} />
            <Route path='/admin/addProduct' element={<AddProductPage />} />
            <Route path='/admin/editeProduct/:id' element={<EditeProduct />} />
          </Route>

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
