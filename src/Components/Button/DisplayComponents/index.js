import React from 'react';
// import { HaptikComponents } from 'haptik-hsl';
import DisplayButton from './DisplayButton';
import DisplayDropdownButton from './DisplayDropdownButton';

export const BUTTON_ELEMENTS = [
    {
        message: 'Use it for Header title and any other title inside the page',
        name: 'Primary Button',
        code: DisplayButton.code,
        component: <DisplayButton primary>Primary Button</DisplayButton>,
    },

    {
        message: 'Use it for Header title and any other title inside the page',
        name: 'Secondary Button',
        code: DisplayButton.code,
        component: <DisplayButton secondary>Secondary Button</DisplayButton>,
    },

    {
        message: 'Use it for Header title and any other title inside the page',
        name: 'Disabled Button',
        code: DisplayButton.code,
        component: <DisplayButton disabled>Click Here</DisplayButton>,
    },
    {
        message: 'Use it for Header title and any other title inside the page',
        name: 'Dropdown Button',
        code: DisplayButton.code,
        component: <DisplayDropdownButton>Click Here</DisplayDropdownButton>,

    },


];
