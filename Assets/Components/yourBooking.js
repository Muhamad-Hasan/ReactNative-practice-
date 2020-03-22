import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
// import { Item } from "native-base";

export default class YourBooking extends Component {
  state = {
    CardArray: [
      {
        Date: "02 Aug 12 2019",
        hoteName: "New American",
        hotelPhoto: require("../Photos/hotel1.jpg"),
        price: "$1200",
        Address: "Address",
        status: "Sucess",
        bookingID: "122334",
        room: "2",
        Stay: "2"
      },
      {
        Date: "02 Aug 12 2019",
        hoteName: "New American",
        hotelPhoto: require("../Photos/hotel1.jpg"),
        price: "$1200",
        Address: "Address",
        status: "Sucess",
        bookingID: "122334",
        room: "2",
        Stay: "2"
      },
      {
        Date: "02 Aug 12 2019",
        hoteName: "New American",
        hotelPhoto: require("../Photos/hotel1.jpg"),
        price: "$1200",
        Address: "Address",
        status: "Sucess",
        bookingID: "122334",
        room: "2",
        Stay: "2"
      },
      {
        Date: "02 Aug 12 2019",
        hoteName: "New American",
        hotelPhoto: require("../Photos/hotel1.jpg"),
        price: "$1200",
        Address: "Address",
        status: "Sucess",
        bookingID: "122334",
        room: "2",
        Stay: "2"
      }
    ]
  };
  render() {
    return (
      <View style={styles.container}>
        {this.state.CardArray.map((Item, i) => {
          return (
            <View style={styles.MainCard}>
              <View style={styles.DateView}>
                <View style={{ width: "70%", borderWidth: 0, padding: 15 }}>
                  <View style={{ flexDirection: "row" }}>
                    <AntDesign name="idcard" size={20} />
                    <Text style={styles.DateText}> {Item.Date} </Text>
                  </View>
                  <Text
                    style={{
                      color: "black",
                      fontWeight: "bold",
                      fontSize: 16,
                      paddingTop: 2
                    }}
                  >
                    {Item.hoteName}
                  </Text>
                  <Text
                    style={{
                      color: "#c2c2c2",
                      fontWeight: "bold",
                      fontSize: 13
                    }}
                  >
                    {Item.Address}
                  </Text>
                </View>

                <View style={styles.SuccessView}>
                  <Text style={styles.sucessText}> {Item.status} </Text>

                  <Text style={styles.RupesText}> {Item.price} </Text>
                </View>
              </View>

              <TouchableOpacity>
                <Image source={Item.hotelPhoto} resizeMode="contain" />
              </TouchableOpacity>
              <View style={styles.LastVIew}>
                <View style={styles.LastVIewText}>
                  <Text style={{ color: "#cbcbcb" }}>Booking ID</Text>
                  <Text style={styles.LastVIewText2}> {Item.bookingID} </Text>
                </View>
                <View style={styles.LastVIewText}>
                  <Text style={{ color: "#cbcbcb" }}> Room </Text>
                  <Text style={styles.LastVIewText2}> {Item.room} </Text>
                </View>

                <View style={styles.LastVIewText}>
                  <Text style={{ color: "#cbcbcb" }}> Nights </Text>
                  <Text style={styles.LastVIewText2}>{Item.Stay} </Text>
                </View>
              </View>
            </View>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2eded"
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
    elevation: 3
  },
  DateView: {
    width: "100%",
    borderWidth: 0,
    flexDirection: "row"
  },
  DateText: {
    color: "#aa7f4a",
    fontWeight: "bold",
    fontSize: 15,
    marginLeft: 3
  },
  DateViewContent: {},
  SuccessView: {
    width: "30%",
    borderWidth: 0,
    justifyContent: "center",
    elevation: 0
  },
  sucessText: {
    width: 74,
    padding: 5,
    color: "white",
    backgroundColor: "#9c6a2d",
    borderRadius: 40,
    textAlign: "center"
  },
  RupesText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 4
  },
  ImageView: {},
  LastVIew: {
    flexDirection: "row",
    width: "100%",
    borderWidth: 0,
    paddingVertical: 10
  },
  LastVIewText: {
    borderWidth: 0,
    width: "33.33%",
    alignItems: "center",
    justifyContent: "center"
  },
  LastVIewText2: {
    color: "#bc9a70",
    fontWeight: "bold",
    marginTop: 5
  }
});
