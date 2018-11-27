import React from 'react';
import PropTypes from 'prop-types';


import styles from './TextBlock.scss';

const TextBlock = (props) => {
    return (
        <div className={[styles.textBlock, props.className].join(' ')}>
            <div className={styles.textBlockTitle}>
                <span>{props.title}</span>
            </div>
            <div className={[styles.textBlockDescription].join(' ')}>
                <span>{props.text}</span>
            </div>

        </div>


    );
};


export default TextBlock;

TextBlock.propTypes = {

    text: PropTypes.string,
    title: PropTypes.string,
    className: PropTypes.string,

};
