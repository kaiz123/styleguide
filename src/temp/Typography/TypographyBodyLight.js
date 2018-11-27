import React from 'react';
import PropTypes from 'prop-types';
import styles from './TypographyBodyLight.scss';

const TypographyTitle = (props) => {
    return (
        <div>
            <div className={styles.bodyLight}>
                <span>{props.children}</span>
            </div>

        </div>


    );
};


export default TypographyTitle;

TypographyTitle.propTypes = {

    children: PropTypes.string,

};
