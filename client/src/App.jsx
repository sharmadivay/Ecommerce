import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import About from "./pages/About/About.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Policy from "./pages/PrivatePolicy/Policy.jsx";
import PageNotFound from "./pages/PageNotFound/PageNotFound.jsx";
import Register from "./pages/Auth/Register/Register.jsx";
import Login from "./pages/Auth/Login/Login.jsx";
import DashBoard from "./pages/user/DashBoard.jsx";
import { ProtectedRoute } from "./components/routes/ProtectedRoute.jsx";
import { AdminRoute } from "./components/routes/AminRoute.jsx";
import ForgotPasword from "./pages/Auth/ForgotPassword/ForgotPasword.jsx";
import AdminDashBoard from "./pages/Admin/AdminDashBoard.jsx";
import CreateCategory from "./pages/Admin/CreateCategory.jsx";
import CreateProduct from "./pages/Admin/CreateProduct.jsx";
import Profile from "./pages/user/Profile.jsx";
import Orders from "./pages/user/Orders.jsx";
import Users from "./pages/Admin/Users.jsx";
import Products from "./pages/Admin/Products.jsx";
import UpdateProduct from "./pages/Admin/UpdateProduct.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import Search from "./pages/Search.jsx";
import Categories from "./pages/Categories.jsx";
import CategoryProduct from "./pages/CategoryProduct.jsx";
import CartPage from "./pages/cartPage.jsx";
import AdminOrders from "./pages/Admin/AdminOrders.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:slug" element={<ProductDetails />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/category/:slug" element={<CategoryProduct />} />
        <Route path="/search" element={<Search />} />
        <Route path="/dashboard" element={<ProtectedRoute />}>
          <Route path="user" element={<DashBoard />} />
          <Route path="user/profile" element={<Profile />} />
          <Route path="user/orders" element={<Orders />} />
        </Route>
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashBoard />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/product/:slug" element={<UpdateProduct />} />
          <Route path="admin/products" element={<Products />} />
          <Route path="admin/users" element={<Users />} />
          <Route path="admin/orders" element={<AdminOrders />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPasword />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;
