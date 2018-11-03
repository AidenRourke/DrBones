import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Login, SignUp} from './views';
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
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
