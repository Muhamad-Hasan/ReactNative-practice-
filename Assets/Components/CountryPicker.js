import React, { Component } from "react";
import DeviceInfo from "react-native-device-info";
import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import CountryPicker, {
  getAllCountries
} from "./react-native-country-picker-modal";
const NORTH_AMERICA = ["CA", "MX", "US"];
export default class CountryPickerscreen extends Component {
  constructor(props) {
    super(props);
    let userLocaleCountryCode = DeviceInfo.getDeviceCountry();
    const userCountryData = getAllCountries()
      .filter(country => NORTH_AMERICA.includes(country.cca2))
      .filter(country => country.cca2 === userLocaleCountryCode)
      .pop();
    let callingCode = null;
    let cca2 = userLocaleCountryCode;
    if (cca2 || !userCountryData) {
      cca2 = "";
      callingCode = "1";
    } else {
      callingCode = userCountryData.callingCode;
    }
    this.state = {
      cca2,
      callingCode,
      countryName: ""
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <CountryPicker
          onChange={value => {
            console.log("countru", value);
            this.setState({
              cca2: value.cca2,
              callingCode: value.callingCode,
              countryName: value.name
            });
            this.props.country(value.name);
          }}
          cca2={this.state.cca2}
          translation="eng"
          hideAlphabetFilter={true}
          showCountryNameWithFlag={true}
          animationType="slide"
          closeable={true}
          filterable={true}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
