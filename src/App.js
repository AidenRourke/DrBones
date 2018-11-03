import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Login, SignUp, MainDashboard} from './views';
import {EnsureAuthentication} from './components';
import './App.css';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <div className="MainPage">
                        <Switch>
                            <Route path='/Login' component={Login}/>
                            <Route path='/SignUp' component={SignUp}/>
                            <EnsureAuthentication>
                                <Switch>
                                    <Route path='/' component={MainDashboard}/>
                                </Switch>
                            </EnsureAuthentication>
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
