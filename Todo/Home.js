import React, { Component } from 'react';
import { View, TouchableHighlight, Text, StyleSheet,ScrollView ,TextInput,Button} from 'react-native';
import List from "./List";


class Home extends Component{
    constructor(Props){
        super(Props);
        this.state = {
            inputText :'text',
            todos : [],
        }
        this.handleText = this.handleText.bind(this);
        this.click = this.click.bind(this);
    }
    
    handleText(t){
        this.setState({
            inputText: t});
    }
    click(todoText){
        var d = new Date();
        var local = this.state.todos;
        local.push({
            'date':d.getDate+"/"+d.getMonth+"/"+d.getFullYear,
            'note':this.state.inputText
        });
        this.setState({
            todos : local,
            inputText : ''
        });
    }
    render(){
        let List = this.state.todos.map((val , key)=>{
            return <List key={key} val={val} />
        });
        return(
            <View style = {styles.Container}>
                <View style = {styles.header}>
                    <Text style = {styles.headerText}>Notes</Text>
                </View>
                <ScrollView>
                
                </ScrollView>          
                <View style = {styles.footer}>
                    <TextInput style = {styles.input} 
                        placeholder = "Enter Todos..."
                        placeholderTextColor = "#9a73ef"
                        autoCapitalize = "none"
                        onChangeText = {this.handleText}
                        value={this.state.inputText}
                        />
                        <Button style={styles.addButton}
                          onPress={this.click(this.state.inputText)}
                          title="+"/>
                
                </View>
            

            </View>
        );
            
    }
}
export default Home;

    const styles = StyleSheet.create({
        Container:{
            flex :1
        },
        headerText:{
            fontSize: 30
        },
        header: {
            flexDirection:'row',
            height:70,
            backgroundColor:'skyblue',
            justifyContent:'center',
            alignItems : 'center'
            

        },
       footer:{
            flexDirection:'column',
            backgroundColor : 'skyblue',
            justifyContent:'flex-end',
            marginTop : 480  
        },
        input:{
            height:70,
            width: 350,
            fontSize:30

        },
        addButton:{
            width:200,
            fontSize: 30
        }

    });







