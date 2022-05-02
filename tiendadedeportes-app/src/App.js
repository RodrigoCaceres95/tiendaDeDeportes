import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import NavBar from './components/navbar';

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
    </div>
  );
}
export default App;

