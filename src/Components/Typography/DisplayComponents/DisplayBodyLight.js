import React, { Component } from 'react';
import TypographyBodyLight from '../../../temp/Typography/TypographyBodyLight';


class DisplayBodyLight extends Component {
    state={}
    render() {
        return (
            <TypographyBodyLight {...this.props} />
        );
    }
}

export default DisplayBodyLight;

// static variable for code
DisplayBodyLight.code = 'console.log("trying")';
