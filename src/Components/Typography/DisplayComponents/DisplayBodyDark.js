import React, { Component } from 'react';
import TypographyBodyDark from '../../../temp/Typography/TypographyBodyDark';


class DisplayBodyDark extends Component {
    state={}
    render() {
        return (
            <TypographyBodyDark {...this.props} />
        );
    }
}

export default DisplayBodyDark;

// static variable for code
DisplayBodyDark.code = 'console.log("trying")';
