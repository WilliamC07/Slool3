import React from 'react';

export default class CreateAccount extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            password: "",
        }
    }

    render(){
        const {name, password} = this.state;

        return (
            <form onSubmit={this.submitForm}>
                <div>
                    <label>Username:</label>
                    <input type="text" value={name} onChange={this.handleNameInput}></input>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={this.handlePasswordInput}></input>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }

    /**
     * Updates state for user's username
     * @param event Source
     */
    handleNameInput = (event) => {
        this.setState({name: event.target.value});
    };

    /**
     * Updates state for user's password
     * @param event Source
     */
    handlePasswordInput = (event) => {
        this.setState({password: event.target.value});
    };

    submitForm = (event) => {
        event.preventDefault();

    };
}