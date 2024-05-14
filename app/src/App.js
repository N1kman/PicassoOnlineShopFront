import "./styles/main.css"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Main from "./components/main/Main"
import About from "./components/info/About"
import Payment from "./components/info/Payment"
import Delivery from "./components/info/Delivery"
import Contact from "./components/info/Contact"
import Requisites from "./components/info/Requisites"
import PurchaseReturns from "./components/info/PurchaseReturns"
import { Routes, Route } from 'react-router-dom';
import AuthModalLayout from "./context/authModalContext"
import Account from "./components/account/Account"
import Products from "./components/products/Products"
import ProductPage from "./components/products/ProductPage"

function App() {

  return (
    <div className="App">
      <div className="main-container">
        <AuthModalLayout>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/requisites" element={<Requisites />} />
            <Route path="/purchase_returns" element={<PurchaseReturns />} />
            <Route path="/account" element={<Account />} />
            <Route path="/products/:category" element={<Products />} />
            <Route path="/product/:id" element={<ProductPage />} />
          </Routes>
          <Footer />
        </AuthModalLayout>
      </div>
    </div>
  );
}

export default App;
