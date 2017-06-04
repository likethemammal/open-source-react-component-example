import React, { Component } from 'react'

import connect from './App.connect'

import CheckboxWithLabel from './CheckboxWithLabel'

class App extends Component {

    onButtonClick = () => {
        const { changeAction, on } = this.props

        changeAction(!on)
    }

    render() {
        const { on } = this.props

        return <div>
            <CheckboxWithLabel labelOn={true}/>

        </div>
    }
}

export default connect(App)