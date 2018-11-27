import React from 'react';
import PropTypes from 'prop-types';
import styles from './Typography.scss';
// import TypographyTitle from './TypographyTitle';

const Typography = (props) => {
    return (
        <div>
            {props.component}
            <div className={styles.message}>
                <span>{props.message}</span>
            </div>

        </div>


    );
};


export default Typography;

Typography.propTypes = {

    message: PropTypes.string,
    component: PropTypes.element,

};
