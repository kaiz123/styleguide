import React, { Component } from 'react';
import Button from '../../../temp/Button';


class DisplayButton extends Component {
    state={}
    render() {
        return (
            <Button {...this.props} />
        );
    }
}

export default DisplayButton;

// static variable for code
DisplayButton.code = 'console.log("trying")';
