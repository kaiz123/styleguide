import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './SidebarItem.scss';

const SidebarItem = (props) => {
    return (
        <NavLink to={props.url} activeClassName={styles.active} className={styles.sidebarItem}>

            <span>{props.children}</span>

        </NavLink>
    );
};


export default SidebarItem;


SidebarItem.propTypes = {
    children: PropTypes.arrayOf(PropTypes.string),
    url: PropTypes.string,
};
