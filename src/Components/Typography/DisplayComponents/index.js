import React from 'react';
// import Typography from '../../Components/Typography';
import DisplayTitle from './DisplayTitle';
import DisplayBodyDark from './DisplayBodyDark';
import DisplayBodyLight from './DisplayBodyLight';
import DisplaySubtitle from './DisplaySubtitle';
import DisplayLabels from './DisplayLabels';

export const TYPOGRAPHYS = [
    {
        subtitle: 'Roboto Medium 18',
        message: 'Use it for Header title and any other title inside the page',
        name: 'Title',
        code: DisplayTitle.code,
        component: <DisplayTitle>Roboto Medium 18</DisplayTitle>,
    },

    {
        subtitle: 'Roboto Medium 18',
        message: 'Use it for Header title and any other title inside the page',
        name: 'Title',
        code: DisplayBodyDark.code,
        component: <DisplayBodyDark>Roboto Medium 18</DisplayBodyDark>,
    },
    {
        subtitle: 'Roboto Medium 18',
        message: 'Use it for Header title and any other title inside the page',
        name: 'Title',
        code: DisplayBodyLight.code,
        component: <DisplayBodyLight>Roboto Medium 18</DisplayBodyLight>,
    },
    {
        subtitle: 'Roboto Medium 18',
        message: 'Use it for Header title and any other title inside the page',
        name: 'Title',
        code: DisplayLabels.code,
        component: <DisplayLabels>Roboto Medium 18</DisplayLabels>,
    },
    {
        subtitle: 'Roboto Medium 18',
        message: 'Use it for Header title and any other title inside the page',
        name: 'Title',
        code: DisplaySubtitle.code,
        component: <DisplaySubtitle>Roboto Medium 18</DisplaySubtitle>,
    },

];
