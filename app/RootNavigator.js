

import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';


import { createAppContainer } from 'react-navigation';
import  Header  from './Header';
import  Login from './LoginForm';
import  Profile  from './Profile';

import DrawerNavigator from './DrawerNavigator';




const RootNavigator =createStackNavigator({
   
    LoginScreen: {
        screen :Login,
    },
    DrawerNavigator :
    {
        screen :DrawerNavigator,
    },
    HeaderScreen :{
        screen :Header,
    }
     
  

});



const App = createAppContainer(RootNavigator);

export default App;