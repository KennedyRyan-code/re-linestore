import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navigation/navbar";
import { Blog } from "./pages/blog/blog";
import { Shop } from "./pages/shop/shop";
import { Cart } from "./pages/cart/cart";
import { Contact } from './pages/contact/contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<Shop />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>   
    </div>
  );
}

export default App;
