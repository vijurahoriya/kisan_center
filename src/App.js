
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "font-awesome/css/font-awesome.min.css";
import "./assets/css/style.css"
import "./assets/css/responsive.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import Home from './Components/Home/Home';
import Profile from './Components/Profile/Profile';
import OrderHistory from './Components/Profile/OrderHistory';
import Wishlist from './Components/Profile/Wishlist';
import ProductList from './Components/Product/ProductList';
import SellKisanCenter from './Components/Kisan/SellKisanCenter';
import Login from './Components/User/Login';
import OtpVerifaction from './Components/User/OtpVerifaction';
import PrivacyPolicy from './Components/Cms/PrivacyPolicy';
import RefundPolicy from './Components/Cms/RefundPolicy';
import TermsOfService from './Components/Cms/TermsOfService';
import ShippingPolicy from './Components/Cms/ShippingPolicy';
import ReferEarn from './Components/Refer/ReferEarn';
import Cart from './Components/Order/Cart';
import Checkout from './Components/Order/Checkout';
import OrderSuccess from './Components/Order/OrderSuccess';
import Faq from './Components/Cms/Faq';
import OrderDetails from './Components/Order/OrderDetails';
import OrderDeliverDetails from './Components/Order/OrderDeliverDetails';
import OrderCancelDetails from './Components/Order/OrderCancelDetails';
import ContactUs from './Components/Pages/ContactUs';
import Blog from './Components/Pages/Blog';
import BlogDetails from './Components/Pages/BlogDetails';
import ProductDetails from './Components/Product/ProductDetails';
import AboutUs from './Components/Cms/AboutUs';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/verification' element={<OtpVerifaction />} />
          <Route path="/" element={< Layout />}>
            <Route index element={<Home />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/order-history' element={<OrderHistory />} />
            <Route path='/wishlist' element={<Wishlist />} />
            <Route path='/product-list' element={<ProductList />} />
            <Route path='/product-details/:id' element={<ProductDetails />} />
            <Route path='/sell-kisan-center' element={<SellKisanCenter />} />
            <Route path='/refer-earn' element={<ReferEarn />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/success' element={<OrderSuccess />} />
            <Route path='/order-details' element={<OrderDetails />} />
            <Route path='/order-deliver-details' element={<OrderDeliverDetails />} />
            <Route path='/order-cancel-details' element={<OrderCancelDetails />} />
            <Route path='/contact-us' element={<ContactUs />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/blog-details' element={<BlogDetails />} />
            <Route path='/privacy-policy' element={<PrivacyPolicy />} />
            <Route path='/refund-policy' element={<RefundPolicy />} />
            <Route path='/terms-of-service' element={<TermsOfService />} />
            <Route path='/shiping-policy' element={<ShippingPolicy />} />
            <Route path='/faq' element={<Faq />} />
            <Route path='/about-us' element={<AboutUs />} />
          </Route>

        </Routes>
      </BrowserRouter>
      <ToastContainer autoClose={2000} />
    </>


  );
}

export default App;
