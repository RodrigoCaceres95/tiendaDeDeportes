import './App.css';
import NavBar from './components/NavBar/navbar';
import ItemDetailContainer from './components/itemDetailcontainer/itemDetailContainer';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CartProvider } from './components/cartContext/cartContext';
import Cart from './components/cart/cart';
import Checkout from './components/checkout/checkout';
import Nosotros from './components/nosotros/nosotros';
import Faq from './components/faq/faq';
import NotFound from './components/NotFound/notfound';
import { Footer } from './components/footer/footer';
function App() {
  return (
    <CartProvider>
    <Router>
      <NavBar/>
      {/* <ItemDetailContainer/>  */}
      <Routes>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/:category/:id' element={<ItemDetailContainer/>}/>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/Cart' element={<Cart/>}/>
        <Route path='/Nosotros' element={<Nosotros/>}/>
        <Route path='/faq' element={<Faq/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </Router>
    </CartProvider>
  );
}
export default App;

