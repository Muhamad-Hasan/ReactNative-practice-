import React, {Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';


export default class Hello extends Component{
    render(){
        return(
            <View>
                <Text style = {Styles.myStyling} onPress = {this.props.update} >Hello, This is {this.props.myState}  </Text>
            </View>
        );
    }
}
const Styles  = StyleSheet.create({
    myStyling : {
        marginTop: 10,
        textAlign : 'center',
        color : 'blue',
        fontWeight : 'bold',
        fontSize : 20
    }
});
// 