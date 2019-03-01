import React, { Component } from 'react'
import TextInput from './../TextInput/TextInput'

class Calculator extends Component {
    constructor() {
        super();
        this.state = {
            current: 0,
            next: 0
        }
    }

    

    render() {
        return (
            <TextInput/>
        )
    }
}

export default Calculator;