import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList} from 'react-native';


export default class HomeScreen extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      dataSource:[]
     };
   }
 
  componentDidMount(){
    fetch("http://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then((responseJson)=> {
      this.setState({
       dataSource: responseJson
      })
    })
    .catch(error=>console.log(error))
    }
 
    render(){
     return(
      <View style={{padding:10}}>
      <FlatList
      padding ={30}
         data={this.state.dataSource}
         renderItem={({item}) => 
         <View style={{height: 50}}>
         <Text style={{height: 50}}>{item.title}</Text>
         <View style={{height: 1,backgroundColor:'gray'}}></View>
         </View>
        }
       />
      
     </View>
     )}
}
 
 
