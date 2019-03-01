import React, { Component } from 'react'

class TextInput extends Component {
    constructor() {
        super();
        this.state = {
            value: '',
        }
    }

    inputChangeHandler = (event) => {
        this.setState({value: event.target.value});
    }

    render() {
        return(
            <div>
                <input type = 'number' value = {this.state.value} onChange = {this.inputChangeHandler}/>
            </div>
        );
    }
}

export default TextInput;