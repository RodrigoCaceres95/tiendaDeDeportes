import './App.css';
import styled from 'styled-components';
import NavBar from './components/navbar';
import ItemDetailContainer from './components/itemDetailContainer';
import ItemListContainer from './components/itemListContainer';

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
    <div className="App">
      <NavBar/>
      <ItemListContainer/>
      {/* <ItemDetailContainer/> */}
      {/* <Class  name="TEST"></Class>
      <Function></Function>
      <List></List> */}
    </div>
  );
}
export default App;

