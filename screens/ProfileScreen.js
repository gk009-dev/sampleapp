import React from 'react';

import {Text,View,Button} from 'react-native';
const ProfileScreen  = () =>{

return(
<View style= {{flex:1 , alignItems:'center' , justifyContent:'center'}}>

<Text>ProfileScreen </Text>
<Button title="click here" 
onPress ={()=> alert('button clicked')}/>
</View>

);


};

export default ProfileScreen;