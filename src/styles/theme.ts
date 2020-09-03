export const theme = {
    appHeader: '48px',
    appFooter: '48px',
    space: 8,
    colors: {},
    buttons: {
        primary: {
            'background-color': '#2F52E0',
            color: 'white',
        },
        success: {
            'background-color': '#00B900',
            color: 'white',
        },
        warning: {
            'background-color': '#F9CB40',
            color: 'white',
        },
        danger: {
            'background-color': '#E3170A',
            color: 'white',
        },
    },
    fonts: {
        headerTitle: {
            'font-size': '2.6rem',
            'font-weight': '600',
        },
        title: {
            'font-size': '2rem',
            'font-weight': '600',
        },
        default: {
            'font-size': '1.6rem',
            'font-weight': '400',
        },
        small: {
            'font-size': '1.2rem',
            'font-weight': '400',
        },
        medium: {
            'font-size': '1.5rem',
            'font-weight': '500',
        },
        large: {
            'font-size': '1.8rem',
            'font-weight': '600',
        },
    },
} as const;
