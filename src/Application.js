import '~/config/ReactotronConfig';

import React from 'react';
import { StatusBar } from 'react-native';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import AuthProvider from '~/components/AuthProvider';
import { store, persistor } from '~/store';
import Routes from '~/routes';
import Theme from '~/theme';
import PaperProvider from '~/theme/PaperProvider';

// eslint-disable-next-line no-console
console.disableYellowBox = true;

const Application = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AuthProvider>
        <PaperProvider>
          <Theme>
            <StatusBar color="#135434" barStyle="light-content" />
            <Routes />
          </Theme>
        </PaperProvider>
      </AuthProvider>
    </PersistGate>
  </Provider>
);

export default Application;
