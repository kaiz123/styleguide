import React from 'react';
import PropTypes from 'prop-types';
import ComponentDescriptionButtons from '../ComponentDescriptionButtons';
import styles from './Row.scss';

const Row = (props) => {
    return (
        <div className={styles.row}>
            <ComponentDescriptionButtons code={props.code} subtitle={props.name} />
            <div>
                <span className={styles.message}>{props.message}</span>
                {props.children}
            </div>

        </div>


    );
};


export default Row;

Row.propTypes = {
    name: PropTypes.string,
    code: PropTypes.string,
    children: PropTypes.element,
    message: PropTypes.string,
};
