import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    // Charcoal
    charcoal: '#2c2d2c',
    charcoal01: 'rgba(44,45,44,0.1)',
    charcoal02: 'rgba(44,45,44,0.2)',
    charcoal03: 'rgba(44,45,44,0.3)',
    charcoal04: 'rgba(44,45,44,0.4)',
    charcoal05: 'rgba(44,45,44,0.5)',
    charcoal06: 'rgba(44,45,44,0.6)',
    charcoal07: 'rgba(44,45,44,0.7)',
    charcoal08: 'rgba(44,45,44,0.8)',
    charcoal09: 'rgba(44,45,44,0.9)',

    // Neutral
    white: '#ffffff',
    offWhite: '#fcffed',
    grey: '#e3f3e4',
    grey2: '#f4f4f4',
    grey3: '#d5d5d5',
    grey9: '#737373',
    black: '#000000',

    // Green
    green: '#8ede63',
    greenFaded: '#edf7ea',
    greenFaded2: '#125332',
    greenLighter: '#f0fbea',
    greenLight: '#f5ffb6',
    greenDark: '#52b232',

    greenDarker: '#135434',
    greenDarker02: 'rgba(19,84,52,0.2)',
    greenDarker06: 'rgba(19,84,52,0.6)',
    greenDarker08: 'rgba(19,84,52,0.8)',

    // Blue
    blue: '#2990E8',
    blueLight: '#E5F0FA',

    // Mango
    mango: '#ffb72b',
    mangoLight: '#fff7e9',

    // Red
    red: '#d34407',
    redLight: '#faece6',

    // Orange
    orange: '#FFAE10',
  },
  fonts: ['Poppins', 'Poppins Medium'],
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
