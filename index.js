
//import { AppRegistry } from 'react-native';
import App from './App';

//AppRegistry.registerComponent('TestProject', () => App);




import { Navigation } from "react-native-navigation";
import Welcome from "./app/screens/welcomeScreen";


  Navigation.registerComponent ('welcome' ,()=>Welcome)

  Navigation.events().registerAppLaunchedListener(()=>{

    Navigation.setRoot({
        root :{
            component:{
                name:"welcome"
            }
        }
    })
  })





