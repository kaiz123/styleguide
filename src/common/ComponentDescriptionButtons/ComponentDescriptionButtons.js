import React from 'react';
import PropTypes from 'prop-types';
import ShowCode from './ShowCode';
import CopyCode from './CopyCode';
import styles from './ComponentDescriptionButtons.scss';

const ComponentDescriptionButtons = (props) => {
    return (
        <div className={styles.componentDescription}>
            <div className={styles.componentDescriptionSubtitle}>
                <span>{props.subtitle}</span>
            </div>
            <div className={styles.componentDescriptionOuterButton}>
                <ShowCode code={props.code} />
                <CopyCode code={props.code} />
            </div>
        </div>


    );
};


export default ComponentDescriptionButtons;


ComponentDescriptionButtons.propTypes = {
    subtitle: PropTypes.string,
    code: PropTypes.string,
};
