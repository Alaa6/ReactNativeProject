import React ,{ Component } from 'react';
import { GiftedChat } from 'react-native-gifted-chat'
import Fire from './Fire'


  




class Chat extends Component {

   

   //static navigationOptions=({navigation}) =>({
      //  title :  navigation.getParam('name') ,
  // });

   /*________________________state : array of messages_______________________________________ */
    state ={
        messages : [] ,
    };
 
    /*_______________________________________________________________ */
    get user ()
    {
        return ({
           
           name : this.props.navigation.getParam('name'),
            _id :Fire.shared.uid,
        });
    }

   /*_______________________________________________________________ */
    //onSend(messages = []) {
       // this.setState(previousState => ({
         // messages: GiftedChat.append(previousState.messages, messages),
        //}))
      //}

  /*_______________________________________________________________ */
    render(){
        return (
            <GiftedChat 
            messages ={this.state.messages} // the array of messages from state
            onSend ={Fire.shared.send}
            user ={this.user}/>
        );
    }
 /*_______________________________________________________________ */

    componentWillMount(){

       Fire.shared.off();

    }

 /*_______________________________________________________________ */
    componentDidMount(){
        Fire.shared.on(NewMessage => this.setState(previousState =>({
            messages :GiftedChat.append(previousState.messages ,NewMessage)

        })));

    }
}

export default Chat ;