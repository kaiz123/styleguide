import IntroductionPage from '../Components/Introduction/IntroductionPage';
import ColorsPage from '../Components/Colors/ColorsPage';
import TypographyPage from '../Components/Typography/TypographyPage';
import PaddingsPage from '../Components/Paddings/PaddingsPage';
import ButtonPage from '../Components/Button/ButtonPage';

export const SIDEBAR_ITEMS = [


    {
        title: '',
        items: [
            {
                title: 'Introduction',
                url: '/styles/introduction',
                component: IntroductionPage,
            },
            {
                title: 'Colors',
                url: '/styles/colors',
                component: ColorsPage,

            },
            {
                title: 'Typography',
                url: '/styles/Typography',
                component: TypographyPage,

            },
            {
                title: 'Paddings',
                url: '/styles/paddings',
                component: PaddingsPage,

            },
        ],
    },

    {
        title: 'Form Elements',
        items: [
            {
                title: 'Text Fields',
                url: '/styles/text',
            },
            {
                title: 'Dropdowns',
                url: '/styles/dropdowns',

            }, {
                title: 'Context Menu',
                url: '/styles/context',

            }, {
                title: 'Search',
                url: '/styles/search',

            },
            {
                title: 'Button Elements',
                url: '/styles/buttons',
                component: ButtonPage,

            },
        ],
    },

    {
        title: 'UI Components',
        items: [
            {
                title: 'Header',
                url: '/styles/header',
            },
            {
                title: 'Tabs',
                url: '/styles/tabs',

            }, {
                title: 'Cards',
                url: '/styles/cards',

            }, {
                title: 'Accordions',
                url: '/styles/accordions',

            },
            {
                title: 'Popups',
                url: '/styles/popups',

            },
            {
                title: 'Toast Messages',
                url: '/styles/toasts',

            },
            {
                title: 'Loading Indicator',
                url: '/styles/loading',

            },
            {
                title: 'Tool Tips',
                url: '/styles/tooltips',

            },
        ],
    },
];
