
 import  React ,{Component} from 'react';
 import  RootNavigator from './app/RootNavigator';
 import store from './app/Store';
 import {Provider} from 'react-redux';




import {
  StyleSheet,
  View,
} from 'react-native';
import Profile from './app/Profile';

class App extends Component
{
  render() {
    return(
    <Provider store={store}>
       <RootNavigator />
    </Provider>
       
     
    );
  }
}

const styles = StyleSheet.create({
  
  container:
  {
    
  
    flex:1,



  },
  homeText :{
  fontStyle :'italic',
  fontSize:30,

  },

});

export default App;
