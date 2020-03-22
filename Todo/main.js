import React, { Component } from 'react';
import { View, TouchableHighlight, Text, StyleSheet,ScrollView ,TextInput,Button} from 'react-native';
import List from './List';
//import console = require('console');

class main extends Component{
    constructor(props){
        super(props);
        this.state = ({
            item:'',
            todoList:[]

        });
        this.show = this.show.bind(this);
    }
    show(){
       console.log(this.state.item);
        var d = new Date();
        var date = d.getDate+"/"+d.getMonth+'/'+d.getFullYear;
       var todos = this.state.todoList;
       todos.push({
            "date":date,
            
       })
    }
    render(){
        var list = this.state.todoList.map((val , key)=>{
            document.write(val.date);
            return <List key={key} keyval={key} val={val} />
        });
        
        return(
            <View>
               
        <TouchableHighlight onPress={()=>{this.show(this.state.item)}}>
            <Text >
               Button
            </Text>
         </TouchableHighlight>
            <ScrollView>
                {list}
            </ScrollView>

                 <TextInput
                 onChangeText={(text)=>{this.setState({item:text})}}
                 />
            </View>

        )
    }
}
export default main; 