import './App.css';
import styled from 'styled-components';
import NavBar from './components/navbar';
import ItemDetailContainer from './components/itemDetailContainer';
import ItemListContainer from './components/itemListContainer';
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
      <ItemListContainer/>
      {/* <ItemDetailContainer/> */}
      <Routes>
        <Route path='/detail/:id' element={<ItemDetailContainer/>}/>
      </Routes>
    </div>
    </Router>
  );
}
export default App;

