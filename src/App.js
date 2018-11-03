import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';
import reducers from './reducers';
import SignIn from './components/login/sign_in';
import SignUp from './components/login/sign_up';
import EnsureLoggedIn from './components/login/ensure_logged_in';
import './App.css';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

class App extends Component {
  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
     <BrowserRouter>
     <div className ="App">
       <div className="MainPage">
         <Switch>
           <Route path='/login/Login' component={SignIn} />
           <Route path='/login/SignUp' component={SignUp} />
         </Switch>
       </div>
       </div>
     </BrowserRouter>
   </Provider>
    );
  }
}

export default App;
