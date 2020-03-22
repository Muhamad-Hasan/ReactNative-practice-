import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet
} from "react-native";
import Globalbutton from "../Components/Globalbutton";
import GlobalHeader from "../Components/globalHeader";

class Login extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <GlobalHeader />

        <View style={Styles.innerContainer}>
          <Image
            source={require('../Photos/Logo.png')}
            style={{ width: "70%", height: "50%" }}
            resizeMode="contain"
          />
        </View>

        <Globalbutton
          style={Styles.button}
          // ALL BUTTON this.props

          backgroundColor={"#9C6A2D"}
          text={"Login"}
          marginTop={20}

/>

<Globalbutton
          style={Styles.button}
          // ALL BUTTON this.props

          backgroundColor={"white"}
          text={"Login"}
          marginTop={10}
          TextColor={'black'}
        />

      </View>
    );
  }
}
export default Login;

const Styles = StyleSheet.create({
  container: {
    flex: 1
  },
  innerContainer: {
    height: "65%",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,

  },

  RegisterText: {
    fontSize: 20,
    borderBottomColor: "black"
  }
});

