import React ,{ Component } from 'react';
import {Text ,
        View ,
        StyleSheet ,
        ActivityIndicator}from 'react-native';
import { List, ListItem, Avatar } from 'react-native-elements';
import Header from './Header';

import { FlatList  } from 'react-navigation'




class Home extends Component
{
    constructor (){
        super();
       
        this.state ={
            StateResult : '',
            page:1,
            refreshing :false ,
            loading :false
            
        };
    }
  componentWillMount(){
       this.getDataList();
    }


   

    //componentDidMount(){
       // this.getDataList();
    //}


    getDataList (){
        var that = this;
        var url = `https://randomuser.me/api/?page=${this.state.page}&results=20` ;
        console.log("-----------url:"+url);

        fetch(url ,{method :'Get'})
        .then(function(response){ 
            return response.json();})

        .then(function(result){
           that.setState({StateResult : result.results ,refreshing :false ,loading:false})
            console.log(result.results);
         })
         .catch(function(error){
             console.log("-------- error ------- "+error);
             alert('result :'+ error);
         });


    }

    renderItem = ({ item }) => {
        return (
            <View style={{flex:1 ,flexDirection :'row',marginVertical:7 ,borderBottomWidth :1,borderBottomColor:'#ccc'}}>
                <View style={styles.avatar }>
              <Avatar  rounded source ={{uri : item.picture.thumbnail}} size='medium' ></Avatar>
              </View>
         
           <View >
              
            <Text  style={styles.nameText}>{item.name.first} {item.name.last}</Text>
            <Text style ={styles.emailText}>{item.email}</Text>
            
           
          </View>
            </View>
            
          
        );
      };

      handleRefresh =() => {
          this.setState({
              page :1,
              refreshing:true ,

          }, () => {
              this.getDataList();
          });

      };

      handleLoadMore =() => {
        this.setState({
            page :this.state.page +1,
            loading:true ,

        }, () => {
            this.getDataList();
        });

    };
    renderFooter =() =>
    {
        return (
            <View style={styles.louder}>
                <ActivityIndicator />

            </View>
        );

    };


  
    render(){ 
     
        return(

            <View  style ={{flex :1 , justifyContent:'center' ,alignItems:'center'}}>
             <FlatList
                data ={this.state.StateResult}
                renderItem ={this.renderItem}
                refreshing ={this.state.refreshing}
                onRefresh= {this.handleRefresh}
                onEndReached ={this.handleLoadMore}
                onEndReachedThreshold={0}
                ListFooterComponent ={this.renderFooter}
               />
                

              
              </View>
        );
    }


}

const styles = StyleSheet.create({
    avatar :
    {
        marginTop :10,
    },

    nameText :
    {

       fontSize:30,
       marginLeft : 10,

   },
   emailText :
   {

       fontSize:20,
       marginLeft : 10,
   
    },
    louder :
    {
        marginTop : 10,
        alignItems :'center',
        width : 50 ,
        height :50

    },
});

export default Home;