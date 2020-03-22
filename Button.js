import React, { Component } from 'react';
import { View, TouchableHighlight, Text, StyleSheet } from 'react-native';

class Button extends Component{

   
   render(){
      return (
         <View style = {styles.container}>
            <TouchableHighlight style= {styles.numericButton} 
            onPress = {this.props.btnMethod}>
               <Text style = {styles.ButtonText}>
                  {this.props.mynumber}
               </Text>
            </TouchableHighlight>
         </View>
      )
   }
   
}
export default Button

const styles = StyleSheet.create ({
   numericButton: {
      backgroundColor: 'gray',
      padding: 0,
      margin: 5,
      

   },
   ButtonText:{
      color: 'black',
      fontSize: 50,
      paddingLeft:19,
      paddingRight:19
   }
   
}) 
