import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddEmployee from './AddEmployee';
import Dashboard from './Dashboard';
import Employees from './Employees';
import LandingPage from './LandingPage';
import NavBar from './NavBar';
import Protected from './Protected';
import Sales from './Sales';
// import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <LandingPage />
        </Route>

        <>
          <Protected>
            <NavBar />
            <Route path='/dashboard'>
              <Dashboard />
            </Route>
            <Route path='/employees'>
              <Employees />
            </Route>
            <Route path='/addemployee'>
              <AddEmployee />
            </Route>
            <Route path='/sales'>
              <Sales />
            </Route>
          </Protected>
        </>
        {/* <Route path='*'>
          <NotFound />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
