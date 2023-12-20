
//console.log("Its Working");
import { BrowserRouter, Routes, Route } from "react-router-dom"

/* Components */
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";

import RoutesWithUserChatComponent from "./components/User/RoutesWithUserChatComponent";


import ProtectedRoutesComponent from "./components/ProtectedRoutesComponents";
import AdminAnalyticsPage from "./pages/Admin/AdminAnalyticsPage";
import AdminChatsPage from "./pages/Admin/AdminChatsPage";
import AdminCreateProductsPage from "./pages/Admin/AdminCreateProductsPage";
import AdminEditProductPage from "./pages/Admin/AdminEditProductPage";
import AdminEditUserPage from "./pages/Admin/AdminEditUserPage";
import AdminOrderDetailsPage from "./pages/Admin/AdminOrderDetailsPage";
import AdminOrdersPage from "./pages/Admin/AdminOrdersPage";
import AdminProductsPage from "./pages/Admin/AdminProductsPage";
import AdminUsersPage from "./pages/Admin/AdminUsersPage";
import CartPage from "./pages/CartPage";
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";
import ProductDetails from "./pages/ProductDetailsPage";
import ProductList from "./pages/ProductListPage";
import RegisterPage from "./pages/RegisterPage";
import UserCartDetails from "./pages/User/UserCartDetailsPage";
import UserOrderDetails from "./pages/User/UserOrderDetailsPage";
import UserOrders from "./pages/User/UserOrdersPage";
import UserProfilePage from "./pages/User/UserProfilePage";
import ScrollToTop from "./utils/ScrollToTop";


function App() {
return (
  <BrowserRouter>
    <ScrollToTop />
    <HeaderComponent />
    <Routes>
      <Route element={<RoutesWithUserChatComponent />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element="Page Not Exists 404" />

        {/* User Protected */}
        <Route element={<ProtectedRoutesComponent admin={false} />}>
          <Route path="/user-profile" element={<UserProfilePage />} />
          <Route path="/user/my-orders" element={<UserOrders />} />
          <Route path="/user/cart-details" element={<UserCartDetails />} />
          <Route path="/user/order-details" element={<UserOrderDetails />} />
        </Route>
      </Route>
      

      {/* Admin Protected */}
      <Route element={<ProtectedRoutesComponent admin={true}/>}>
        <Route path="/admin/users" element={<AdminUsersPage />} />
        <Route path="/admin/products" element={<AdminProductsPage />} />
        <Route path="/admin/orders" element={<AdminOrdersPage />} />
        <Route path="/admin/order/details" element={<AdminOrderDetailsPage />} />
        <Route path="/admin/edit/user" element={<AdminEditUserPage />} />
        <Route path="/admin/edit/products" element={<AdminEditProductPage />} />
        <Route path="/admin/create/products" element={<AdminCreateProductsPage />} />
        <Route path="/admin/chat" element={<AdminChatsPage />} />
        <Route path="/admin/analytics" element={<AdminAnalyticsPage />} />
      </Route>
    </Routes>

    <FooterComponent />
  </BrowserRouter>
);
}

export default App;
