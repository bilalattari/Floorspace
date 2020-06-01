import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from '../screens/Login';
import SplashScreen from '../screens/Splash';
import Home from '../screens/Home';
import Supplier from '../screens/Supllier';
import AddSupplier from '../screens/AddSupplier';
import Labours from '../screens/Labours';
import AddLabor from '../screens/Addlabor';
import Products from '../screens/Products';
import Addproducts from '../screens/Addproduct';
import Checklist from '../screens/Checklist';
import Profile from '../screens/Profile';
import ProjectFiles from '../screens/ProjectFiles';
const SplashStack = createStackNavigator(
  {
    Splash: {
      screen: SplashScreen,
    },
  },
  {headerMode: null},
);
const AuthStack = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
    },
  },
  {headerMode: null},
);
const AppStack = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    Supplier: {
      screen: Supplier,
    },
    AddSupplier: {
      screen: AddSupplier,
    },
    Labours: {
      screen: Labours,
    },
    Products: {
      screen: Products,
    },
    Checklist: {
      screen: Checklist,
    },
    AddLabor: {
      screen: AddLabor,
    },
    Addproducts: {
      screen: Addproducts,
    },
    Profile: {
      screen: Profile,
    },
    ProjectFiles: {
      screen: ProjectFiles,
    },
  },
  {initialRouteName: 'Checklist', headerMode: null},
);

const App = createSwitchNavigator({
  Splash: {
    screen: SplashStack,
  },
  // Auth: {
  //   screen: AuthStack,
  // },
  App: {
    screen: AppStack,
  },
});

const Routes = createAppContainer(App);
export default Routes;
