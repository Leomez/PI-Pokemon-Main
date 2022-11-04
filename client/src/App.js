import './App.css';
import { Route } from 'react-router-dom'
import Landing from './Components/Landing/Landing';
import Home from './Components/Home/Home';
import Create from './Components/Create/Create';
import Nav from './Components/Nav/Nav';

function App() {
  return (
    <div className="App">

    <Route exact path="/">
      <Landing />
    </Route>
    
    <Route path={'/pokemon'}>
      <Nav />
    </Route>


    <Route exact path="/pokemon">
      <Home />
    </Route>

    <Route exact path="/pokemon/create">
      <Create />
    </Route>

    

      {/* <h1>Henry Pokemon</h1> */}
    </div>
  );
}

export default App;
