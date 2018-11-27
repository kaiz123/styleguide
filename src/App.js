import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { SIDEBAR_ITEMS } from './constants';
import Header from './common/Header';
import Sidebar from './common/Sidebar';
import Routes from './Routes';
import styles from './App.scss';

const App = () => {
    return (

        <Router>
            <div className={styles.outer}>
                <Header />
                <div className={styles.wrapper}>
                    <Sidebar items={SIDEBAR_ITEMS} />
                    <Routes className={styles.routes} />
                </div>


            </div>
        </Router>
    );
};

export default App;
