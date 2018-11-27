import React from 'react';
import PropTypes from 'prop-types';


import styles from './Color.scss';

const Color = (props) => {
    return (
        <div className={styles.color}>
            <div className={styles.colorOval} />
            <div className={styles.colorText}>
                <div className={styles.colortextSubtitle}>
                    <span>{props.subtitle}</span>
                </div>
                <div className={styles.colorTextMessage}>
                    <span>{props.message}</span>
                </div>
            </div>

        </div>


    );
};


export default Color;


Color.propTypes = {
    subtitle: PropTypes.string,
    message: PropTypes.string,

};
