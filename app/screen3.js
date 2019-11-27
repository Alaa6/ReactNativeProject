import React ,{ Component } from 'react';
import {Text , View ,TouchableOpacity ,StyleSheet}from 'react-native';
import { DrawerActions } from 'react-navigation-drawer';
import { connect } from 'react-redux';
import { loginAction } from  './actions/authActions';
import { bindActionCreators } from 'redux';

class Screen3 extends Component
{
    render(){ 
     
        return(
            <View >
              
               
               
                <TouchableOpacity onPress={()=>this.props.navigation.dispatch(DrawerActions.toggleDrawer())} style={{}}>
                    <Text>Open</Text>

                </TouchableOpacity>

                <Text style={styles.text}> {this.props.user.name}</Text>
                <Text style={styles.text}> { 'your email is : '+this.props.user.email}</Text>
                <Text style={styles.text}> { 'type : '+this.props.user.type}</Text>
                <Text style={styles.text}> { 'phone number : '+this.props.user.phone}</Text>

               

                
                
                
            </View>
        );

    }

}

const styles =StyleSheet.create({
    container :{
        flex :1,
        justifyContent :'center',
        borderWidth :2,
        borderRadius:5,
        marginRight :10,
        marginLeft :10,
    
    },

    text:{
        fontSize :17,
        marginLeft :16,
        marginRight:16,
       
    }
})

const mapStateToProps =(state)=>{
console.log(state);
    return {
        user : state.auth.user,
        token : state.auth.token

    }
    

}
/*const mapDispatchToProps=dispatch =>bindActionCreators({
    loginAction
},dispatch)*/



export default connect(mapStateToProps)(Screen3);