import './App.css';
import { Box } from '@material-ui/core';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import { useSelector } from 'react-redux';
//components
import Home from './Home/Home';
import Header from './Home/Header';
import DetailView from './components/Detail/DetailView';
import CreateView from './components/Detail/CreateView';
import UpdateView from './components/Detail/UpdateView';
import Signup from './Home/Signup';
import About from './Home/Home/About';

import Login from './Home/LogIn';
import Logout from './Home/Logout';
import Contact from './Home/Home/Contact';
function App() {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <>
      <BrowserRouter>
        <Header />
        <Box style={{ marginTop: 64 }}>
          <Switch>
            <Route exact path="/" component={Home} />
            {
              user ? <><Route exact path="/about" component={About} />
                <Route exact path='/create' component={CreateView} />
                <Route exact path='/details/:id' component={DetailView} />
                <Route exact path='/update/:id' component={UpdateView} />
                <Route exact path='/contact' component={Contact} />
                </> : <Login />}
            <Route path="/signin">
              {user ? <Redirect to="/" /> : <Login />}
            </Route>
            <Route path="/signup">
              {user ? <Redirect to="/" /> : <Signup />}
            </Route>
          </Switch>
        </Box>
      </BrowserRouter>
    </>
  );
}

export default App;
