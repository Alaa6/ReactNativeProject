

/*This is an Example of React Native Map*/
import React ,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView ,{Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';


const GOOGLE_MAPS_APIKEY  ='';

class DisplayMap extends Component {

  constructor (props){
    super(props);
   
    this.state ={
       markers :[],
        
    };
    this.handlePress =this.handlePress.bind(this);
}

handlePress (e){

  this.setState({
    markers : [
      ...this.state.markers ,
      {
        coordinate : e.nativeEvent.coordinate ,
        cost :' 50 ,500' ,
      }
    ]
  })

}
  render() {
    return (

      <View style={styles.container}>
        <MapView
            style={styles.map}
            initialRegion={{
            latitude: 30.026300,
            longitude: 31.496773,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
            
          }}
          onPress ={this.handlePress}
        >
          {this.state.markers.map((marker)=>{
            return (<Marker {...marker}/>);
          })}

            <MapView.Marker
             coordinate={{
               latitude: 30.026300,
                longitude:  31.496773,
                }}
                
                title = {'Alaa Home'}
                description ={'هنا يرقد حزلقوم '}
             />
              <MapView.Marker
             coordinate={{
               latitude: 30.021074,
                longitude:  31.173145,
                }}
                title = {'another Home'}
                description ={'any description '}
             />

             <MapViewDirections
             origin ={{
              latitude: 30.026300,
              longitude:  31.496773,
             }}
             destination={{
              latitude: 30.021074,
              longitude:   31.173145,
             }}
             apikey={GOOGLE_MAPS_APIKEY}
             strokeColor='red'
             strokeWidth={3}/>

            
        </MapView>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    position:'absolute',
    top:0,
    left:0,
    right:0,
    bottom:0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  map: {
    position:'absolute',
    top:0,
    left:0,
    right:0,
    bottom:0,
  },
});

export default  DisplayMap;