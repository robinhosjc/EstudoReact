import React , { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
    static defaultProps = {
    
    }

    static propTypes = {
        title: PropTypes.string.isRequired
    }

    render() {
        return (
            <div>
                {this.props.title}
                <button>{this.props.children}</button>
            </div>
        );
    }
}

Button.defaultProps = { 
    title: 'Default'
}

export default Button;