import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Todos from '~/screens/Todos';

const StackApp = createStackNavigator({
  Todos: {
    screen: Todos,
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
    },
  },
})

const Routes = createSwitchNavigator({
  StackApp
});

export default createAppContainer(Routes);
