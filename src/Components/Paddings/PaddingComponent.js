import React from 'react';
import PropTypes from 'prop-types';
import styles from './Paddings.scss';

const PaddingComponent = (props) => {
    return (
        <div className={styles.row}>
            <div className={styles.subtitle}>
                <span> {props.subtitle} </span>
            </div>
            <div className={styles.message}>
                <span> {props.message} </span>
            </div>
        </div>
    );
};


export default PaddingComponent;

PaddingComponent.propTypes = {

    message: PropTypes.string,
    subtitle: PropTypes.string,
};
