import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
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
import RoomOverview from '../screens/RoomOverview';
import ProjectFiles from '../screens/ProjectFiles';
import Estimate from '../screens/Etimate';
import EstimateDrawn from '../screens/EstimateDrawn';
import Draw from '../screens/Draw'
import EstimateOverView from '../screens/ShowEstimate';
const SplashStack = createStackNavigator(
  {
    Splash: {
      screen: SplashScreen,
    },
  },
  { headerMode: null, },
);



const AuthStack = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
    },
  },
  {
    headerMode: null,
  },

);
const AppStack = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    Draw: {
      screen: Draw,
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
    EstimateDrawn: {
      screen: EstimateDrawn,
    },
    Products: {
      screen: Products,
    },
    Checklist: {
      screen: Checklist,
    },
    EstimateOverView: {
      screen: EstimateOverView,
    },
    Estimate: {
      screen: Estimate,
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
    RoomOverview: {
      screen: RoomOverview,
    },
  },
  { initialRouteName: 'Home', headerMode: 'none', },
);

const App = createSwitchNavigator({
  Splash: {
    screen: SplashStack,
  },
  // Auth: {
  //   screen: AuthStack,
  // },
  App: {
    screen:AppStack,
  },
});

const Routes = createAppContainer(App);
export default Routes;
