import React from 'react';
import {BrowserRouter, Router, Switch} from "react-router-dom";

export default class Home extends React.Component{
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
