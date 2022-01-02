import Navbar from './Navbar';
import Home from './Home';
import rollit from './rollit.svg';

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <div className ="content">
        <img src={rollit} className="App-roll" alt="rollit"/>
        <Home/>
      </div>
    </div>
  );
}

export default App;
