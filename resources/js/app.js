import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Login from "./components/login/login";
import CreateAccount from "./components/login/createAccount";

class App extends React.Component{
    render(){
        return (
            <BrowserRouter>
                <Switch>
                    {/*The user must be login in the view the website at all*/}
                    <Route exact path = '/' component={CreateAccount}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('head'));