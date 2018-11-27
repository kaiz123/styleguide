import React, { Component } from 'react';
import TypographyTitle from '../../../temp/Typography/TypographyTitle';


class DisplayTitle extends Component {
    state={}
    render() {
        return (
            <TypographyTitle {...this.props} />
        );
    }
}

export default DisplayTitle;

// static variable for code
DisplayTitle.code = 'console.log("trying")';
