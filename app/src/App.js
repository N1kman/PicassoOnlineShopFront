import "./styles/main.css"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Main from "./components/main/Main"
import About from "./components/info/About"
import Payment from "./components/info/Payment"
import Delivery from "./components/info/Delivery"
import Contact from "./components/info/Contact"
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="about" element={<About />} />
          <Route path="payment" element={<Payment />} />
          <Route path="delivery" element={<Delivery />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
