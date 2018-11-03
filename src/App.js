import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';
import reducers from './reducers';
import SignIn from './components/login/sign_in';
import SignUp from './components/login/sign_up';
import EnsureLoggedIn from './components/login/ensure_logged_in';
import MedicalForm from './components/forms/medical_form';
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
         <EnsureLoggedIn>
            <Switch>
              <Route path='/new/:id' component={MedicalForm} />
            </Switch>
          </EnsureLoggedIn>
       </div>
       </div>
     </BrowserRouter>
   </Provider>
    );
  }
}

export default App;
