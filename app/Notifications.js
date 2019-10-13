import React ,{ Component } from 'react';
import {Text , View ,TouchableOpacity}from 'react-native';
import { FlatList } from 'react-navigation'

const data = new Array(50).fill(0);

class Notifications extends Component
{
    renderItem = ({ index }) => {
        return (
         
          <View style={{ height: 50 }}>
            <Text style={{ textAlign: 'center' }}>Notifications {index}</Text>
          </View>
        );
      };
    render(){ 
     
        return(
            <View  style ={{flex :1 ,justifyContent:'center' ,alignItems:'center'}}>
              
              <FlatList
              data ={data}
              renderItem={this.renderItem}
              contentContainerStyle ={{padding :10}}/>  
            </View>
        );
    }


}

export default Notifications;