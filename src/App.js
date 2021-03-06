import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import LeagueDetails from './components/LeagueDetails/LeagueDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/league/:idLeague">
          <LeagueDetails></LeagueDetails>
        </Route>
      </Switch>
    </Router>
    // <div className="App">
    //   <h1>this is app</h1>
    // </div>
  );
}

export default App;
