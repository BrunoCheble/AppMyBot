import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Service from '~/pages/Service';

const Routes = createAppContainer(createSwitchNavigator({
  Service,
}));

export default Routes;
