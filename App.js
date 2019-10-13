

import  React ,{Component} from 'react';
import  Profile from './app/Profile';

import  RootNavigator from './app/RootNavigator';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

class App extends Component
{
  render() {
    return(
      <View style ={styles.container}>
       <RootNavigator />
      </View>
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
