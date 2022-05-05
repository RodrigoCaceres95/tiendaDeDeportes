import './App.css';
import styled from 'styled-components';
import NavBar from './components/navbar';
import ItemContainer from './components/itemListContainer';
import Greeting from './components/itemListContainer';
//import Class from './components/Class';
//import Function from './components/function';
//import List from './components/lists';

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
      <NavBar></NavBar>
      <Greeting name="Mundo"></Greeting>
      {/* <Class  name="TEST"></Class>
      <Function></Function>
      <List></List> */}
    </div>
  );
}
export default App;

