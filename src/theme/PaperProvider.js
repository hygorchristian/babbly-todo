import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#52b232',
    accent: '#52b232',
  },
};

function Provider({ children }) {
  return <PaperProvider theme={theme}>{children}</PaperProvider>;
}

export default Provider;
