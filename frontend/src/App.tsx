import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.tsx";
import Home from "./pages/Home/Home.tsx";
import Cart from "./pages/Cart/Cart.tsx";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder.tsx";
import Footer from "./components/Footer/Footer.tsx";
import { useEffect, useState } from "react";
import LoginPopup from "./components/LoginPopup/LoginPopup.tsx";
import Verify from "./pages/Verify/Verify.tsx";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showLogin ? "hidden" : "unset";
  }, [showLogin]);

  return (
    <>
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/verify" element={<Verify />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
