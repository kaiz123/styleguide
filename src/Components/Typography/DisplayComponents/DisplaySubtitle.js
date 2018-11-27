import React, { Component } from 'react';
import TypographySubtitle from '../../../temp/Typography/TypographySubtitle';


class DisplaySubtitle extends Component {
    state={}
    render() {
        return (
            <TypographySubtitle {...this.props} />
        );
    }
}

export default DisplaySubtitle;

// static variable for code
DisplaySubtitle.code = 'console.log("trying")';
