import React, {Component} from 'react';
import {  View, StyleSheet } from 'react-native';

export default class Home extends Component{
    render(){
        return(
            <View style = {Styles.container }>
                <View style = {Styles.redbox } /> 
                <View style = {Styles.bluebox } />  
                <View style = {Styles.blackbox } /> 
            </View> 
        );
    }
}
const Styles  = StyleSheet.create({
    container : {
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      backgroundColor: 'grey',
      height: 500
    },
    redbox: {
        width: 100,
        height: 100,
        backgroundColor: 'red'
        
     },
     bluebox: {
        width: 100,
        height: 100,
        backgroundColor: 'blue',
        position : 'relative',
        left: 100
     },
     blackbox: {
        width: 100,
        height: 100,
        backgroundColor: 'black',
        position : 'relative',
        left: 200
     },
});
