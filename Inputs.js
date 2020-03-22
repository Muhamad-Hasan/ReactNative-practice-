import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

class Inputs extends Component {
   
   
   render() {
      return (
         <View style = {styles.container}>
            <TextInput style = {styles.input}  />
         </View>
               )        
   }
}
export default Inputs

const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   input: {
      margin: 15,
      padding:0,
      height: 70,
      borderColor:'black',
      borderWidth : 3,
      fontSize : 50,
      
   }
      
   })
   