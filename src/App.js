// import {Navbar} from './components/Navbar';
// import Home from './Home';
// import {Button} from './components/Button';
import {Card} from './components/organisms/Card.component';
import {Rules} from './components/organisms/Rules.component';

function App() {
  
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Rules />
      <div className="content">
        {/* <Home />  */}
        <Card />
      </div>
    </div>
  );
}

export default App;
