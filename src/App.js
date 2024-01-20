/* import logo from './logo.svg';
import './App.css'; */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home";
import Cart from "./pages/Cart/Cart";
import AboutUs from "./pages/about";
import MenuUs from "./pages/menu";
import ContactUs from "./pages/contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/categories" element={<MenuUs/>}/>
        <Route path ="/contact" element={<ContactUs/>}/>
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
