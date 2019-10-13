import React, { Component } from 'react';
import { Text,View,StyleSheet ,TouchableOpacity} from 'react-native';
import { DrawerActions } from 'react-navigation-drawer';
import MenuButton from './MenuButton';


class Header extends Component
{
    constructor()
    {
        super();
        this.state ={
            title :'Your profile'

        };
    }
    render(){
        return(
            <View style={styles.header}>
                <Text style={styles.text}>
                 {this.props.title }
                </Text>
                <TouchableOpacity onPress={()=>this.props.navigation.dispatch(DrawerActions.toggleDrawer())}>
                    <Text>Open</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles =StyleSheet.create({
    header:{
        backgroundColor: '#efefef',
        height :80,
        alignItems:'center',
        justifyContent:'center',
        width :500


    },
    text :
    {
        fontSize: 20,
        fontWeight:'bold'

    }
});

export default Header;