import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  ScrollView
} from "react-native";
  
export default class MyReward extends Component {
  state = {
    arr: [
      {
    titleText: "Lorem ipsum dolor sit amet, consectetaur adipisicing elit, sed do eiusmod tempor.",  
    hotelPhoto: require("../Photos/img8.png"),
    startDate: " 02 Aug",
    endDate: "12 Aug 19",
    point:"129P"
  },
  {
    titleText: "Lorem ipsum dolor sit amet, consectetaur adipisicing elit, sed do eiusmod tempor.",   
    hotelPhoto: require("../Photos/img4.png"),
    startDate: " 02 Aug",
    endDate: "12 Aug 19",
    point:"129P"
  },
  {
    titleText: "Lorem ipsum dolor sit amet, consectetaur adipisicing elit, sed do eiusmod tempor.",  
    hotelPhoto: require("../Photos/img3.png"),
    startDate: " 02 Aug",
    endDate: "12 Aug 19",
    point:"129P"
  },
 
  ]
  };

  render() {
    return (
      <View style={styles.container}>
 

    <ScrollView> 
        {this.state.arr.map((Item, index) => {
       return (
                     
    <View style={styles.MainCard}>
        <View style={{height:"60%",}}>
         
        <ImageBackground source={Item.hotelPhoto} style={styles.backgroundImg} 
                resizeMode="cover" />
        <TouchableOpacity style={{position:"absolute",right:10,}} >
            <Image source={require("../Photos/sharebutton.png")}          
                 resizeMode="contain" />
            </TouchableOpacity>
            <View style={{position:"absolute",right:5,top:120,}} >
             <Image source={require("../Photos/button3.png")}
                         
                 resizeMode="contain" />
                 <Text style={{ color:"white",fontWeight:"bold",left:25,bottom:38}}>{Item.point}</Text>
            </View>
        </View>

    <View style={{height:"40%"}}>
            <Text style={styles.titleText}>
                Title
            </Text>
                <View
              style={styles.date}
            >
              <Image
                source={require("../Photos/calendar2.png")}
                resizeMode="contain"
              />
                <Text style={{ color: "#a17238", fontWeight:"bold" }}> 
                    {Item.startDate} - {Item.endDate}
                </Text>
            </View>
                <Text style={styles.title}>
                    {Item.titleText}
            </Text>
        </View>
    </View>
    
        );
          })}

          </ScrollView>   
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#f2f2f2"
  },
  MainCard: {
    backgroundColor: "white",
    width: "90%",
    alignSelf: "center",
    borderRadius: 10,
    marginBottom: 5,
    marginTop: 18,
    shadowColor: "#e5e5e5",
    shadowOpacity: 2,
    shadowRadius: 2,
    elevation: 3,
    height:230,
    overflow:"hidden"
  },
  backgroundImg:{
    height:"100%", 
    width:"100%",
  },
  title:{
    color:"gray", 
    marginLeft:10, 
    marginRight:5
  },
  titleText:{
    color:"black", 
    fontWeight:"bold", 
    marginLeft:10, 
    marginTop:10
  },
  date:{
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
    marginTop:4,
    marginBottom:4    
  }
   
});
