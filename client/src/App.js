import React from 'react';
import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import NoMatch from './components/NoMatch';
import Login from './components/Login';
import Register from './components/Register';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

function App() {
  return (
    <>
    <NavBar />
    <Container>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route component={NoMatch} /> 
      </Switch>
    </Container>
    </>
  );
}

export default App;
