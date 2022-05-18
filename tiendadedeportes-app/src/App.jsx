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

  const styles = {
    color: "red"
  }
  return (
    <Router>
    <div className="App">
      <NavBar/>
      <ItemListContainer/>
      <Routes>
        <Route path='/detail/:id' element={<ItemDetailContainer />}/>
      </Routes>
      {/* <ItemDetailContainer/> */}
      {/* <Class  name="TEST"></Class>
      <Function></Function>
      <List></List> */}
    </div>
    </Router>
  );
}
export default App;

