import React ,{Component} from 'react'
import  {Text ,View ,StyleSheet ,TextInput ,Button }from 'react-native'
import  Header  from './Header';


class Login extends Component
{
//static navigationOption ={
   // title :'chatter' ,
//};

    state = {
        name :''
    };

    

    onChangeText =name => this.setState({name}); // variable = {}

    render()
    {
        return (
            <View>
        <Header title ='  Login Form'>  </Header>
        <View>
        <Text style ={styles.text} >UserName :</Text>
        <TextInput 
        style ={styles.text_input} 
        onChangeText ={this.onChangeText}
        value ={this.state.name}></TextInput>
        </View>
        <View>
        <Text style ={styles.text} >Password :</Text>
        <TextInput style ={styles.text_input}></TextInput>
        </View>
        <View style={styles.button}>
        <Button  color ='green'  title ='Login' onPress={()=> this.props.navigation.navigate('DrawerNavigator' ,{ name : this.state.name})}></Button>

        </View>
        
        
    </View>
        );
    }

}
const styles =StyleSheet.create({
    text:{
        fontSize :17,
        marginLeft :16,
        marginTop:40,
    },
    text_input:{
        height :40,
        borderColor :'gray',
        borderWidth:1,
        borderRadius:5,
        marginLeft:16,
        marginRight:16,
        marginTop :5,
    

    },
    button:{
       marginHorizontal:25,
       marginTop :100,

    },
    images:
    {
       marginLeft:120,
       marginTop:10

    }
});


export default Login ;