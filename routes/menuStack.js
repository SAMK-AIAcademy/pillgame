import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

// Import the screens to use in the stack.
import Menu from '../screens/Menu';
import LevelMenu from '../screens/LevelMenu';
import ResumeGame from '../screens/Resume';
import Options from '../screens/Options';
import Level3Menu from '../screens/Level3Menu';
import Level3 from '../screens/Level3';

// Available transitions to screens from menu screen.
const screens = {
  menu: {
    screen: Menu,
    navigationOptions: {
      title: 'Menu',
      headerShown: false, //this will hide the header
    },
  },
  resumeGame: {
    screen: ResumeGame,
    navigationOptions: {
      title: 'Resume game',
      headerShown: false,
    },
  },
  newGame: {
    screen: LevelMenu,
    navigationOptions: {
      title: 'New game',
      headerShown: false,
    },
  },
  options: {
    screen: Options,
    navigationOptions: {
      title: 'Options',
      headerShown: false,
    },
  },
  Level3Menu: {
    screen: Level3Menu,
    navigationOptions: {
      title: 'Level3',
      headerShown: false,
    },
  },
  Level3: {
    screen: Level3,
    navigationOptions: {
      title: 'Level3',
      headerShown: false,
    },
  },
};

// Variable to export.
const MenuStack = createStackNavigator(screens);

// Export the screens to use in the App.js.
export default createAppContainer(MenuStack);
