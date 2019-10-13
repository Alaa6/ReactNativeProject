
import  React ,{Component}  from 'react';
import {View ,StyleSheet ,Text ,TouchableOpacity} from 'react-native';
import MenuButton from './MenuButton';
import  Header  from './Header';


class Profile extends Component{

    render()
    {
        return (  
                 
                <View style={styles.container}>
                     
                <Text style ={styles.text}>
                     Wecome Alaa 
                </Text>

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

export default Profile ;