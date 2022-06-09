import './App.css';
import styled from 'styled-components';
import NavBar from './components/NavBar/navbar';
import ItemDetailContainer from './components/itemDetailcontainer/itemDetailContainer';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CartProvider } from './components/cartContext/cartContext';
import Cart from './components/cart/cart';
import Checkout from './components/checkout/checkout';

function App() {
  const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
  return (
    <CartProvider>
    <Router>
    <div className="App">
      <NavBar/>
      {/* <ItemDetailContainer/>  */}
      <Routes>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/detail/:id' element={<ItemDetailContainer/>}/>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/Cart' element={<Cart/>}/>
      </Routes>
    </div>
    </Router>
    </CartProvider>
  );
}
export default App;

