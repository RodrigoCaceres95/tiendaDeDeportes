import './App.css';
import styled from 'styled-components';
import NavBar from './components/NavBar/navbar';
import ItemDetailContainer from './components/itemDetailcontainer/itemDetailContainer';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
  return (
    <Router>
    <div className="App">
      <NavBar/>
      {/* <ItemDetailContainer/>  */}
      <Routes>
        <Route path='/detail/:id' element={<ItemDetailContainer/>}/>
        <Route path='/' element={<ItemListContainer/>}/>
      </Routes>
    </div>
    </Router>
  );
}
export default App;

