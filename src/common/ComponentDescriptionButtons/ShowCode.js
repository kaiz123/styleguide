import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { HaptikComponents } from 'haptik-hsl';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierSulphurpoolDark } from 'react-syntax-highlighter/styles/hljs';
import Button from '../../temp/Button';
import styles from './ShowCode.scss';


class ShowCode extends Component {
    state = {
        active: false,
    };

    render() {
        return (
            <div>
                <Button secondary shouldCallFunction onClick={this._activateDrawer}>Show code</Button>
                <div>
                    <HaptikComponents.ComponentDrawer
                        active={this.state.active}
                        placement="RIGHT"
                        width={400}
                        zIndex={2}
                        noOverlay
                        noDisable
                        onOverlayClick={this._deactivateDrawer}
                    >

                        <HaptikComponents.ComponentDrawerHeader onClose={this._deactivateDrawer}>
                  Code
                        </HaptikComponents.ComponentDrawerHeader>

                        <HaptikComponents.ComponentDrawerBody className={styles.drawerBody}>
                            <SyntaxHighlighter
                                className={styles.wrapCode}
                                language="javascript"
                                style={atelierSulphurpoolDark}
                            >
                                {this.props.code}
                            </SyntaxHighlighter>
                        </HaptikComponents.ComponentDrawerBody>
                    </HaptikComponents.ComponentDrawer>
                </div>
            </div>
        );
    }

    _activateDrawer = () => {
        this.setState({
            active: true,
        });
    };

    _deactivateDrawer = () => {
        this.setState({
            active: false,
        });
    };
}


export default ShowCode;


ShowCode.propTypes = {
    code: PropTypes.string,
};
