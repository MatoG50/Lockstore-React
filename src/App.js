import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddEmployee from './AddEmployee';
import Dashboard from './Dashboard';
import Employees from './Employees';
import LandingPage from './LandingPage';
import NavBar from './NavBar';
// import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <LandingPage />
        </Route>

        <>
          <NavBar />
          <Route exact path='/dashboard'>
            <Dashboard />
          </Route>
          <Route exact path='/employees'>
            <Employees />
          </Route>
          <Route exact path='/addemployee'>
            <AddEmployee />
          </Route>
        </>
        {/* <Route path='*'>
          <NotFound />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
