import React from 'react';
// import PropTypes from 'prop-types';


import styles from './Header.scss';

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.headerRow}>
                <img src="/images/hand.jpeg" alt="hand" className={styles.headerImage} />
                <div className={styles.headerColumn}>
                    <div className={styles.headerText}>Haptik Platform UI Guideline V1.0 </div>

                </div>
            </div>

        </div>


    );
};


export default Header;


// Header.propTypes = {
// };
