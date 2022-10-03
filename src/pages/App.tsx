import CartDrawer from "components/CartDrawer";
import Footer from "components/Footer";
import Header from "components/Header";
import TxModal from "components/TxModal";
import { Route, Router, Routes } from "react-router-dom";
import Auctions from "./Auctions";
import DomainDetails from "./DomainDetails";
import Home from "./Home";
import Market from "./Market";
import Profile from "./Profile";

const App = () => {
  return (
    <>
      <Header />
      <div className="main-container">
        <TxModal />
        <CartDrawer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tokens" element={"tokens"} />
          <Route path="/market/*" element={<Market />} />
          <Route path="/domain/:domain" element={<DomainDetails />} />
          <Route path="/auction" element={<Auctions />} />
          <Route path="/profile/*" element={<Profile />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};
export default App;
