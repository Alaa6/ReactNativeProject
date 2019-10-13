import {createDrawerNavigator} from 'react-navigation-drawer';

import { createAppContainer } from 'react-navigation';

import Taps from './Taps';
import Home from './Home';
import Screen3 from './screen3';
import TobNavigator from './TabNavigator';
import Chat from './chat';
import DisplayMap from './DisplayMap';


const DrawerNavigator =createDrawerNavigator(

    {
         Screen3 :{ screen :Screen3},
         Home :{ screen :Home},
         Taps :{ screen :TobNavigator},
         DisplayMap :{ screen :DisplayMap},
         chat :{screen :Chat},
        
    },);

     //const App2 = createAppContainer (DrawerNavigator);

     export default DrawerNavigator;
 