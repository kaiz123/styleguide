import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Toggle.scss';

class Toggle extends Component {
    state = {
        val: this.props.value,
    };

    componentWillReceiveProps(nextProps) {
        this.setState({
            val: (nextProps.value),
        });
    }

    render() {
        const activeToggleClassName = this.state.val ? styles.toggleInputKnobActive : '';
        const activeInputClassName = this.state.val ? styles.toggleInputActive : '';
        return (
            <div className={`${styles.toggle} ${this.props.className}`}>
                <div className={styles.toggleLabel}>{this.props.label}</div>
                <div className={`${styles.toggleInput} ${activeInputClassName}`}>
                    <div
                        onClick={this.onChange}
                        className={`${styles.toggleInputKnob} ${activeToggleClassName}`}
                    />
                </div>
            </div>
        );
    }

    onChange = () => {
        this.setState({
            val: !(this.state.val),
        });
        this.props.onChange(this.state.val);
    };
}

Toggle.propTypes = {
    label: PropTypes.string,
    className: PropTypes.string,
    value: PropTypes.bool,
    onChange: PropTypes.func,
};

export default Toggle;
