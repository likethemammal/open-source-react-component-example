import React, { Component } from 'react'

import css from './Component.less'

class SomeComponent extends Component {

    static defaultProps = {
        className: css.container,
    }

    render() {

        const { className } = this.props

        return <div className={className}>
            <div>{'Some Text'}</div>
        </div>
    }
}

export default SomeComponent