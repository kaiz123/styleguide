import { Switch, Route } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';
import { SIDEBAR_ITEMS } from './constants';

const Routes = (props) => {
    return (
        <div className={props.className}>
            {

                SIDEBAR_ITEMS.map((item) => {
                    return (


                        <Switch>
                            {
                                item.items.map((element) => {
                                    if (element.component) {
                                        return (
                                            <Route exact path={element.url} component={element.component} />
                                        );
                                    }
                                })
                            }
                        </Switch>
                    );
                })


            }
        </div>

    );
};


export default Routes;


Routes.propTypes = {
    className: PropTypes.string,
};
