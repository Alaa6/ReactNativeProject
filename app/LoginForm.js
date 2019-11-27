import React ,{Component} from 'react'
import  {Text ,View ,StyleSheet ,TextInput ,Button ,TouchableOpacity }from 'react-native'
import  { loginAction }from './actions';
import {connect} from 'react-redux';

import  Header  from './Header';
import {Field ,reduxForm } from 'redux-form';

import store from './Store'

import { bindActionCreators } from 'redux';



 const myFields = ({lable}) =>{

    return (
        <View>
            <Text style ={styles.text}>{lable} </Text>
            <TextInput style ={styles.text_input}/>
        </View>
          );

};

const  submit = values => {
    alert(values);
};

 console.log(store.getState());


class Login  extends Component {
     

    constructor(){
        super();
        this.state ={
            email :'',
            password :''

        } ;   
    }
   
 

 
 
   loginClick = () =>{
       
       const email = this.state.email ;
       const password = this.state.password ;
       
      let response ={
          user :{
              resEmail :email,
              resPassword :password
          }
      }
       
       if(email != "" && password != "")
       {
        this.props.loginAction(email , password);
        this.props.navigation.navigate('DrawerNavigator' ,{Email :email});
      

       }
       else{
        alert('please enter your data ...');
       }
       

   }

           

   render() {

    return (
       
        <View style ={styles.container}>
            <Text style ={styles.welcomeText}>Welcome To Login ^_^</Text>
          
           
            
        
            <TextInput
             style ={styles.text_input}
             onChangeText ={(email)=>this.setState({email})}
             autoCapitalize='none'
             placeholder="Email"/>

            <TextInput 
            style ={styles.text_input}
            onChangeText ={(password)=>this.setState({password})}
            secureTextEntry
            placeholder="Password"/>

            <Text> {this.props.error}</Text>

           
            <View style={styles.button}>
                 <Button  title ="Login" onPress={this.loginClick} > Login </Button>
            </View>
            
            
      
        </View>
        
    );
};

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
       
    },
    welcomeText:{
        fontSize :25,
        marginLeft :55,
        marginRight:16,
       marginBottom :100,
       
       
    },
    text_input:{
        height :40,
        borderColor :'gray',
        borderWidth:1,
        borderRadius:5,
        marginLeft:16,
        marginRight:16,
        marginBottom :5,
       // width:200,
       // marginTop :5,
    

    },
    button:{
       marginHorizontal:15,
       marginTop :10,

    },
    images:
    {
       marginLeft:120,
       marginTop:4

    }
});

/*export default reduxForm({
    form :'login', //unique name for this form
  
})(Login);*/

const mapStateToProps =(state)=>{

    return {
        user : state.auth.user,
        louding : state.auth.louding ,
        error : state.auth.error ,

    }
    

}

const mapDispatchToProps=dispatch =>bindActionCreators({
    loginAction
},dispatch)

export default connect(mapStateToProps , mapDispatchToProps)(Login);





