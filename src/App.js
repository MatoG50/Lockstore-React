import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import LandingPage from './LandingPage';
import NavBar from './NavBar';
import NotFound from './NotFound';

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
        </>
        {/* <Route path='*'>
          <NotFound />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
