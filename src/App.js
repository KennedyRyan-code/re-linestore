import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navigation/navbar";
import { Wishlist } from "./pages/wishlist/wishlist";
import { Shop } from "./pages/shop/shop";
import { Cart } from "./pages/cart/cart";
import { User } from './pages/user/user';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<Shop />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/user' element={<User />} />
        </Routes>
      </Router>   
    </>
  );
}

export default App;
