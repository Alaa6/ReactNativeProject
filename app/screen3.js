import React ,{ Component } from 'react';
import {Text , View ,TouchableOpacity }from 'react-native';
import { DrawerActions } from 'react-navigation-drawer';

class Screen3 extends Component
{
    render(){ 
     
        return(
            <View >
              
                <Text>
                 Screen3
                </Text>
                <TouchableOpacity onPress={()=>this.props.navigation.dispatch(DrawerActions.toggleDrawer())}>
                    <Text>Open</Text>
                </TouchableOpacity>
                
                
            </View>
        );
    }

}

export default Screen3;