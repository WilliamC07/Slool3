import "./bootstrap";
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/home';
import {BrowserRouter, Router, Switch} from "react-router-dom";

class App extends React.Component{
    render(){
        return (
            <BrowserRouter>
                <div>
                    Hi
                </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Home/>, document.getElementById('head'));