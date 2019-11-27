
import  React ,{Component}  from 'react';
import {View ,StyleSheet ,Text ,TouchableOpacity, Button} from 'react-native';



class Welcome extends Component{

    render()
    {
        return (  
                 
                <View style={styles.container}>
                     
                <Text style ={styles.text}>
                     Wecome RNN
                </Text>
                <Button title ="signIn" onPress={()=>{}}></Button>
                <Button title ="signOut" onPress={()=>{}}></Button>

                </View>
                );
    }

}

const styles = StyleSheet.create({
     container:
      {
    
    alignItems :'center',
    flex:1,
    justifyContent :'center',


     },
  text :{
  fontStyle :'italic',
  fontSize:30,
  marginTop :50 ,

    },
});

export default Welcome ;