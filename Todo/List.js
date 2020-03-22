import React, { Component } from 'react';
import { View, TouchableHighlight, Text, StyleSheet,ScrollView ,TextInput,Button} from 'react-native';

class List extends Component{
    render(){
        return(
            
                <View style ={styles.main}>
                    <Text key={keyval}>{this.props.val.date}</Text>
                    
                </View>
        )
    }
}
export default List;
const styles = StyleSheet.create({
    main:{
        marginTop:200
    }
})