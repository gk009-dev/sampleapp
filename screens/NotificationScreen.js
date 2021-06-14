import React from 'react';

import {Text,View,Button} from 'react-native';
const NotificationScreen  = () =>{

return(
<View style= {{flex:1 , alignItems:'center' , justifyContent:'center'}}>

<Text>NotificationScreen </Text>
<Button title="click here" 
onPress ={()=> alert('button clicked')}/>
</View>

);


};

export default NotificationScreen;