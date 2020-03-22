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
  
export default class AllExchange extends Component {
  state = {
    arr: [
      {
    titleText: "Lorem ipsum dolor sit amet, consectetaur adipisicing elit, sed do eiusmod tempor.",  
    hotelPhoto: require("../Photos/img3.png"),
    name: "Josh Smith",
    profilepic: require("../Photos/profilepic1.png"),
  },
  {
    titleText: "Lorem ipsum dolor sit amet, consectetaur adipisicing elit, sed do eiusmod tempor.",   
    hotelPhoto: require("../Photos/img3.png"),
    name: "Name Name",
    profilepic: require("../Photos/profilePic.jpg"),
  },
  {
    titleText: "Lorem ipsum dolor sit amet, consectetaur adipisicing elit, sed do eiusmod tempor.",  
    hotelPhoto: require("../Photos/img8.png"),
    name: "User Name",
    profilepic: require("../Photos/profilepic1.png"),
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
        <View style={{height:"30%"}}>
        <Text style={styles.titleText}>
                Title
            </Text>
            <Text style={styles.title}>
                    {Item.titleText}
            </Text>
            </View>

            <View style={{ height:"50%"}}>
        <Image source={Item.hotelPhoto} style={styles.backgroundImg} 
                resizeMode="cover" />
    
        </View>

    <View style={styles.bottom}>
        <View style={styles.profileImg}>
            <Image source={Item.profilepic} 
            style={{width:"100%", height:"100%", }} 
                  />
                </View>
                <View style={{width:"60%", justifyContent:"center", }}>
                    <Text style={styles.nameText}>{Item.name}</Text>
                </View>
                <View style={{width:"20%", justifyContent:"center", }}>
                <Image source={require("../Photos/message.png")} 
                style={{width:"60%", 
                height:"60%",
                position:"absolute", 
                right:5}} 
                resizeMode="contain" />
                </View>
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
    height:270,
    overflow:"hidden"
  },
  backgroundImg:{
    height:"100%", 
    width:"100%",
    marginTop:0
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
 
  bottom:{
    height:"20%",
    flexDirection:"row", 
    justifyContent:"center", 
    alignItems:"center"
  },
  profileImg:{
    width:40,
    height:20, 
    justifyContent:"center", 
    alignItems:"center",
    height:40, 
    borderRadius:40, 
    overflow:"hidden" 
  },
  nameText:{
    fontWeight:"bold", 
    color:"black", 
    textAlign:"left", 
    marginLeft:10
  }
   
});
