import React, { Component } from 'react'

import {
    View,
    Text,
} from '@likethemammal/react-primitives'

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
            <View>
                <Text>
                    {'Some example text'}
                </Text>
            </View>
        </div>
    }
}

export default connect(App)