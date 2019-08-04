import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from '~/pages/Main';
import Filter from '~/pages/Filter';

const Routes = createAppContainer(createSwitchNavigator({
  Main,
  Filter,
}));

export default Routes;
