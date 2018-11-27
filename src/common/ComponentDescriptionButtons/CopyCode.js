import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { HaptikDecorators } from 'haptik-hsl';
import Button from '../../temp/Button';
import { copyToClipboard } from '../../utils/clipboard';


@HaptikDecorators.ToastMessage()
class CopyCode extends Component {
    render() {
        return (
            <div>

                <Button shouldCallFunction secondary onClick={this._copyCode}>Copy code</Button>
            </div>
        );
    }


  _copyCode=() => {
      copyToClipboard(this.props.code);
      this.props.activateToastMessage({ title: 'Copied to Clipboard', type: 'POSITIVE' });
  }
}


export default CopyCode;


CopyCode.propTypes = {
    code: PropTypes.string,
    activateToastMessage: PropTypes.func,
};
