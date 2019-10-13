import React ,{ Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import { StyleSheet } from 'react-native';

class MenuButton extends Component
{
    render(){
        return(
            <Icon
             name="rocket"
             color="#000000" 
             size={32}
             style ={styles.menuIcon}
             onPress={()=>{}}>
            </Icon>
        );
    }
}

const styles =StyleSheet.create({
    menuIcon: {

        zIndex :9,
        position : 'absolute',
        top : 40,
        left:20

    }  
});
export default MenuButton;

