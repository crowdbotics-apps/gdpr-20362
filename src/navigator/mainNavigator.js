import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps2103041Navigator from '../features/Maps2103041/navigator';
import NotificationList3103040Navigator from '../features/NotificationList3103040/navigator';
import Feed4103039Navigator from '../features/Feed4103039/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps2103041: { screen: Maps2103041Navigator },
NotificationList3103040: { screen: NotificationList3103040Navigator },
Feed4103039: { screen: Feed4103039Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
