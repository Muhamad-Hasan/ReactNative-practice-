import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput
} from "react-native";
import { Content, Container } from "native-base";
export default class GlobalInput extends Component {
  constructor() {
    super();
    this.state = {
      passwordShow: true
    };
  }
  render() {
    return (
      <View>
        <View
          style={{
            width: "50%",
            //borderWidth: 1,
            //justifyContent: "center",
            marginTop: 10,
            //alignSelf: "center",
            marginLeft: 20
          }}
        >
          <Text
            style={{
              fontSize: 17,
              color: "#bfbfbf"
            }}
          >
            {this.props.lableText}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignSelf: "center",
            width: "90%",
            borderWidth: 1,
            borderRadius: 4,
            borderColor: "#e8e8e8",
            marginTop: 5
          }}
        >
          <View
            style={{
              width: "10%",
              justifyContent: "center",
              marginLeft: 10
            }}
          >
            <Image source={this.props.ImageIconURL} />
          </View>

          <TextInput
            secureTextEntry={this.props.secureTextEntry}
            style={{
              height: 40,
              width: "72%",
              borderColor: "gray",

              borderRadius: 3
            }}
          />
          {this.props.passwordShow == true ? (
            <TouchableOpacity style={{ justifyContent: "center" }}>
              <Text
                style={{ textAlign: "center", fontSize: 17, color: "#bfbfbf" }}
              >
                Show
              </Text>
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    );
  }
}
