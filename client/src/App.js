import './App.css';
import { Route, Switch } from 'react-router-dom'
import Landing from './Components/Landing/Landing';
import Home from './Components/Home/Home';
import Create from './Components/Create/Create';
import Nav from './Components/Nav/Nav';
import Detail from './Components/Detalle/Detail';

function App() {
  return (
    <div className="App">

      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
      </Switch>

      <Route path={'/pokemon'}>
        <Nav />
      </Route>


      <Route exact path="/pokemon">
        <Home />
      </Route>

      <Route exact path="/create">
        <Create />
      </Route>

      <Route exact path="/pokemon/:id" component={Detail} />





      {/* <h1>Henry Pokemon</h1> */}
    </div>
  );
}

export default App;
