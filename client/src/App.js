import './App.css';
import { Route } from 'react-router-dom'
import Landing from './Components/Landing/Landing';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">

    <Route exact path="/">
      <Landing />
    </Route>

    <Route exact path="/pokemons">
      <Home />
    </Route>

      {/* <h1>Henry Pokemon</h1> */}
    </div>
  );
}

export default App;
