import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import SignUp12186999Navigator from '../features/SignUp12186999/navigator';
import Maps3186998Navigator from '../features/Maps3186998/navigator';
import BlankScreen0186996Navigator from '../features/BlankScreen0186996/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
SignUp12186999: { screen: SignUp12186999Navigator },
Maps3186998: { screen: Maps3186998Navigator },
BlankScreen0186996: { screen: BlankScreen0186996Navigator },

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
