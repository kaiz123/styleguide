import React from 'react';
import PropTypes from 'prop-types';


import styles from './Button.scss';

const Button = (props) => {
    let classType;
    let click;
    if (props.shouldCallFunction) {
        click = props.onClick;
        console.log('hello');
    }
    if (props.secondary) {
        classType = styles.buttonSecondary;
    } else if (props.primary) {
        classType = styles.buttonPrimary;
    } else if (props.disabled) {
        classType = styles.buttonDisabled;
    } else if (props.primary) {
        classType = styles.buttonPrimary;
    }
    return (
        <div>
            <div>
                <button className={[styles.button, classType].join(' ')} type="button" onClick={click}>
                    {props.children}
                </button>
            </div>
        </div>


    );
};


export default Button;


Button.propTypes = {

    children: PropTypes.string,
    onClick: PropTypes.func,
    secondary: PropTypes.bool,
    primary: PropTypes.bool,
    disabled: PropTypes.bool,
    // message: PropTypes.string,
    shouldCallFunction: PropTypes.bool,
};
