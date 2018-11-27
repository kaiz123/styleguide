import React from 'react';
import PropTypes from 'prop-types';
import styles from './TypographyBodyDark.scss';

const TypographyTitle = (props) => {
    return (
        <div>
            <div className={styles.bodyDark}>
                <span>{props.children}</span>
            </div>

        </div>


    );
};


export default TypographyTitle;

TypographyTitle.propTypes = {

    children: PropTypes.string,

};
