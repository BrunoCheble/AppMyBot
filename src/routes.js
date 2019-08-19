import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Service from '~/pages/Service';
import Filter from '~/pages/Filter';

const Routes = createAppContainer(createSwitchNavigator({
  Service,
  Filter,
}));

export default Routes;
