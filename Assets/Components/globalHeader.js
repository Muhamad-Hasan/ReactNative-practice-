import React, { Component } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
  View,
  Platform
} from "react-native";

import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title
} from "native-base";
import Feather from "react-native-vector-icons/Feather";
import Octicons from "react-native-vector-icons/Octicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


export default class HeaderExample extends Component {
  render() {
    return (                        
                        //         ALL PROPS
                        //      
                        //   <GlobalHeader
                        //         Points={true}
                        //        Avator={true}
                        //        leftHeading={"Exchange"}
                        //       twoWords={1}
                        //       SearchIcon={true}
                        //       Pencil={true}
                        //       AvatorSetting={true}
                        //       bunch={true}
                        //       HeartAndSetting={true}
                        //       RightAvatorAccount={true}
                        //       searchAndClock={true}
                        //       HeadingText= " Payment "  
                        //        avatorArrow={true}
                        //         Points2={true}
                        //         lefHeading="Points"
                        //         Points="sss"
                        //         leftArrow={true}
                        // elevation={1}
                        //backgroundColor={"white"}
                        //         />





      <Header style={{ backgroundColor:this.props.backgroundColor?this.props.backgroundColor:'white' ,elevation:this.props.elevation }}>
        <Left style={{ flex: 1, height: "100%", justifyContent: "center",paddingLeft:2 }}>
          {this.props.leftArrow == true ? (
            <TouchableOpacity
           
                onPress={()=>this.props.navigation.goBack()}
            >
              <Icon name="arrow-back" style={{ color: "#a2743b" }} />
            </TouchableOpacity>
          ) : this.props.Points == true ? (
            <Text numberOfLines={1}>Points 0.00</Text>
          ) : this.props.Avator == true ? (
            <View style={styles.avatarImage}>
              <Image
                source={require("../Photos/profilePic.jpg")}
                style={{ width: "100%", height: "100%" }}
              />
            </View>
          ) : this.props.avatorArrow == true ? (
            <TouchableOpacity
              style={[
                styles.avatarImage,
                {
                  backgroundColor: "white",
                  justifyContent: "center",
                  alignItems: "center",
                  alignContent: "flex-end",
                  marginTop: 10
                }
              ]}
            >
              <Icon name="arrow-back" style={{ color: "#a2743b" }} />
            </TouchableOpacity>
          ) : this.props.leftHeading !== "" ? (
            <Text
              numberOfLines={1}
              style={{ fontWeight: "bold", color: "black", fontSize: 20 }}
            >
              {this.props.leftHeading}
            </Text>
          ) : null}
        </Left>

        <Body
          style={
            this.props.twoWords === 1
              ? { flex: 2, alignItems: "center", justifyContent: "center" }
              : { flex: 1, alignItems: "center", justifyContent: "center" }
          }
        >
          {this.props.HeadingText !== "" ? (
            <Text style={{ color: "black", fontSize: 20, fontWeight: "bold" }}>
              {" "}
              {this.props.HeadingText}{" "}
            </Text>
          ) : null}
        </Body>
        <Right
          style={{
            borderWidth: 0,
            height: "100%",
            alignItems: "center",
            paddingRight: 5
          }}
        >
          {this.props.searchAndClock == true ? (
            <View
              style={{ flexDirection: "row", width: "100%", height: "100%" }}
            >
              <View
                style={{
                  width: "50%",
                  justifyContent: "center",
                  alignItems: "flex-end"
                }}
              >
                <MaterialCommunityIcons
                  name="clock-outline"
                  size={23}
                  color="#a2743b"
                />
              </View>
              <View
                style={{
                  width: "50%",
                  borderWidth: 0,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Feather name="search" size={23} color="grey" />
              </View>
            </View>
          ) : this.props.SearchIcon == true ? (
            <Feather name="search" size={23} color="grey" />
          ) : this.props.Pencil == true ? (
            <Octicons name="pencil" size={23} color="grey" />
          ) : this.props.AvatorSetting == true ? (
            <TouchableOpacity
              style={[
                styles.avatarImage,
                {
                  backgroundColor: "white",
                  justifyContent: "center",
                  alignItems: "center",
                  alignContent: "flex-end",
                  marginTop: 10
                }
              ]}
            >
              <MaterialCommunityIcons
                name="settings"
                size={23}
                color="#a2743b"
              />
            </TouchableOpacity>
          ) : this.props.bunch == true ? (
            <Image
              source={require("../Photos/circle.png")}
              style={{ width: "20%", tintColor: "#32332233" }}
              resizeMode="contain"
            />
          ) : this.props.HeartAndSetting == true ? (
            <View
              style={{ flexDirection: "row", width: "100%", height: "100%" }}
            >
              <View
                style={{
                  width: "50%",
                  justifyContent: "center",
                  alignItems: "flex-end"
                }}
              >
                <MaterialCommunityIcons
                  name="clock-outline"
                  size={23}
                  color="#a2743b"
                />
              </View>
              <View
                style={{
                  width: "50%",
                  borderWidth: 0,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Feather name="search" size={23} color="grey" />
              </View>
            </View>
          ) : this.props.RightAvatorAccount == true ? (
            <TouchableOpacity
              style={[
                styles.avatarImage,
                {
                  backgroundColor: "white",
                  justifyContent: "center",
                  alignItems: "center",
                  alignContent: "flex-end",
                  marginTop: 10
                }
              ]}
            >
              <MaterialCommunityIcons
                name="account"
                style={{ color: "#a2743b" }}
                size={26}
              />
            </TouchableOpacity>
          ) : null}
        </Right>
      </Header>
    );
  }
}
const styles = StyleSheet.create({
  avatarImage: {
    width: 40,
    height: 40,

    borderRadius: 40,
    overflow: "hidden"
  }
});
