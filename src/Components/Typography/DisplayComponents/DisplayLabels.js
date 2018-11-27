import React, { Component } from 'react';
import TypographyLabels from '../../../temp/Typography/TypographyLabels';


class DisplayLabels extends Component {
    state={}
    render() {
        return (
            <TypographyLabels {...this.props} />
        );
    }
}

export default DisplayLabels;

// static variable for code
DisplayLabels.code = 'console.log("trying")';
