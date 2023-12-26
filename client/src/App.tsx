import { Route, Routes } from "react-router-dom";
import HomePage from "@pages/Home";
import ProductPage from "@pages/product/Product";
import ProductDetailsPage from "@pages/product-details/ProductDetails";
import Header from "@components/Header";
import Footer from "@components/Footer/Footer";
import Login from "@pages/auth/login/Login";
import Auth from "@pages/auth/Auth";
import Register from "@pages/auth/register/Register";
import Admin from "@pages/admin/Admin";
import Index from "@pages/admin/index";
function App() {
  // Check if the current route is the admin page
  const isAdminPage = window.location.pathname.startsWith("/admin");
  return (
    <>
      {!isAdminPage && <Header />}
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/product-details" element={<ProductDetailsPage />} />

        <Route element={<Auth />}>
          <Route index path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        {/* all admin page are here */}
        <Route path="admin" element={<Admin />}>
          <Route index element={<Index />} />
        </Route>
      </Routes>
      {!isAdminPage && <Footer />}
    </>
  );
}

export default App;

