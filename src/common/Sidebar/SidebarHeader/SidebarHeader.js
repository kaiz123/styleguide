import React from 'react';
import PropTypes from 'prop-types';


import styles from './SidebarHeader.scss';

const SidebarHeader = (props) => {
    return (
        <div className={styles.sidebarHeader}>

            <span>{props.children}</span>

        </div>


    );
};


export default SidebarHeader;


SidebarHeader.propTypes = {
    children: PropTypes.string,
};
