import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import Profile from './Profile';
import Notifications from './Notifications';
import Setting from './Setting';


const TabNavigator = createMaterialTopTabNavigator({

    profile : {screen : Profile},
    notifications : {screen : Notifications},
    setting : {screen : Setting},


    

});

export default TabNavigator;