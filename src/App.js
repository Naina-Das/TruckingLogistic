import logo from './logo.svg';
import Login from './LoginComponent';
import Update from './Update';
import './App.css';
import './Login.css';
import { TruckList } from './TruckList';
import SignUp from './SIgnUp';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";



// import './Update.css';
function App() {
  return (
    <div className="App">
     <Router>
      <div>
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/truck">
            <Update/>
          </Route>
          <Route path="/truck-list">
            <TruckList/>
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
