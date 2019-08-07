import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from '~/pages/Main';
import Service from '~/pages/Service';

const Routes = createAppContainer(createSwitchNavigator({
  Main,
  Service,
}));

export default Routes;
