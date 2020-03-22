import React, {Component} from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

import Inputs from './Inputs.js';
import Home from './Home.js';
import Button from './Button.js';

export default class Calculator extends Component{
  constructor(){
    super();
    this.state = {
       result: '',
       operand1:'',
       operator :'',
           
    }
    this.handleOperator = this.handleOperator.bind(this);
    this.one = this.one.bind(this);
    this.two = this.two.bind(this);
    this.three = this.three.bind(this);
    this.four = this.four.bind(this);
    this.five = this.five.bind(this);
    this.six = this.six.bind(this);
    this.seven = this.seven.bind(this);
    this.eight = this.eight.bind(this);
    this.nine = this.nine.bind(this);
    this.zero = this.zero.bind(this);
    this.clear = this.clear.bind(this);
    
    
 }
 zero = () => {
    let add = this.state.result+0;
    this.setState({ result: add })
 }
 one = () => {
   let add = this.state.result+1
   this.setState({ result: add })
 }
 two = () => {
   let add = this.state.result+2
   this.setState({ result: add })
 }
 three = () => {
   let add = this.state.result+3
   this.setState({ result: add })
 }
 four = () => {
   let add = this.state.result+4
   this.setState({ result: add })
 }
 five = () => {
   let add = this.state.result+5
   this.setState({ result: add })
 }
 six = () => {
   let add = this.state.result+6
   this.setState({ result: add })
 }
 seven= () => {
   let add = this.state.result+7
   this.setState({ result: add })
 }
 eight = () => {
   let add = this.state.result+8
   this.setState({ result: add })
 }
 nine = () => {
   let add = this.state.result+9
   this.setState({ result: add })
 }
 handleOperator = (ev) =>{
    var oper1 = this.state.result;
    this.setState({
       result:'',
       operand1 : oper1,
       operator : ev
        
    });
    
   }
    
 
 equal = () =>{
   
    let oper2 = this.state.result;
      if(this.state.operator == 0){
         
         let finalResult = parseInt(this.state.operand1) + (parseInt(oper2))
         this.setState({
            result : finalResult.toString()
         })
      }
      if(this.state.operator == 1){
         
         let finalResult = parseInt(this.state.operand1) - (parseInt(oper2))
         this.setState({
            result : finalResult.toString()
         })
      }

      if(this.state.operator == 2){
         
         let finalResult = parseInt(this.state.operand1) * (parseInt(oper2))
         this.setState({
            result : finalResult.toString()
         })
    
      }
      if(this.state.operator == 3){
         
         let finalResult = parseInt(this.state.operand1) / (parseInt(oper2))
         this.setState({
            result : finalResult.toString()
         })
      }
   
}
 del= () =>{
    let oper = this.state.result;
    let n = oper.length;
    let afterDel = oper.slice(0 , n-1);
    this.setState({
       result:afterDel
    })  
 }
 clear(){
    this.setState({
       result :'',
       operator :'',
       operand1 : ''
    })
 }
    

 

    render(){
        return(
         <View>
         <View >
            < Inputs  myText = {this.state.result} /> 
            <View style={styles.container1}>
               
               < Button mynumber = '1' btnMethod = {this.one} />
               < Button mynumber = '2' btnMethod = {this.two} />
               < Button mynumber = '3' btnMethod = {this.three} />
               < Button mynumber = '+' btnMethod = {() =>{this.handleOperator('0')}} />
               < Button mynumber = 'AC' btnMethod = {this.clear} />
               
            </View>
            <View style={styles.container2}>
            
               < Button mynumber = '4' btnMethod = {this.four} />
               < Button mynumber = '5' btnMethod = {this.five} />
               < Button mynumber = '6' btnMethod = {this.six} />
               < Button mynumber = ' - ' btnMethod = {() =>{this.handleOperator('1')}} />
               
            </View>
            <View style={styles.container2}>
               < Button mynumber = '7' btnMethod = {this.seven} />
               < Button mynumber = '8' btnMethod = {this.eight} />
               < Button mynumber = '9' btnMethod = {this.nine} />
               < Button mynumber = 'x' btnMethod = {() =>{this.handleOperator('2')}} />
               
            </View>
            <View style={styles.container2}>
               < Button mynumber = '0' btnMethod = {this.zero} />
               < Button mynumber = 'C' btnMethod = {this.del} />
               < Button mynumber = '=' btnMethod = {this.equal} />
               < Button mynumber = '/' btnMethod = {() =>{this.handleOperator('3')}} />
               
            </View>
            
         </View> 
         </View>  
         
        );
                
    }
}
const styles = StyleSheet.create({
   container1: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      marginTop: 18,
      marginLeft:10
   },
   container2: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      position: 'relative',
      top :10,
      marginLeft:10,
      marginBottom: 10
   },


   })
   