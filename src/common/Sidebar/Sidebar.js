import React from 'react';
import PropTypes from 'prop-types';
import SidebarHeader from './SidebarHeader';
import SidebarItem from './SidebarItem';


import styles from './Sidebar.scss';

const Sidebar = (props) => {
    return (
        <div className={styles.sidebar}>
            {

                props.items.map((item) => {
                    return (
                        <div className={styles.sidebarGroup}>

                            <SidebarHeader>{item.title}</SidebarHeader>
                            <div>
                                {
                                    item.items.map((element) => {
                                        return (
                                            <SidebarItem url={element.url}> {element.title} </SidebarItem>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    );
                })


            }
        </div>


    );
};


export default Sidebar;


Sidebar.propTypes = {

    items: PropTypes.arrayOf(PropTypes.string),
};
