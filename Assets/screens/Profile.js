import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet
} from "react-native";
import {Content} from 'native-base'
import Globalbutton from "../Components/Globalbutton";
import GlobalHeader from "../Components/globalHeader";


class Profile extends Component {
    render() {
      return (
          <View style = {Styles.container}>
              <GlobalHeader 
               //       //         Points={true}
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
                               HeadingText= " Profile "  
                          //      avatorArrow={true}
                        //         Points2={true}
                        //         lefHeading="Points"
                        //         Points="sss"
                                 leftArrow={true}
                        // elevation={1}
                        //backgroundColor={"white"}
                        />
                        <Content>
                <View style ={Styles.row}>
                    <View style = {Styles.secondRow}>
                        <View>
                            <Text style ={Styles.rowText}>User Name</Text>
                        </View>
                        <View style ={Styles.rowContainner}>
                            <Text style ={Styles.boldText}>Buzzfreeze</Text>
                        </View>
                    </View>
                </View>
                            
                <View style ={Styles.row}>
                    <View style = {Styles.secondRow}>
                        <View>
                            <Text style ={Styles.rowText}>Email</Text>
                        </View>
                        <View style ={Styles.rowContainner}>
                            <Text style ={Styles.boldText}>Guset@gmail.com</Text>
                        </View>
                    </View>
                </View>

                <View style ={Styles.row}>
                    <View style = {Styles.secondRow}>
                        <View>
                            <Text style ={Styles.rowText}>Phone</Text>
                        </View>
                        <View style ={Styles.rowContainner}>
                            <Text style ={Styles.boldText}>0181190301</Text>
                        </View>
                    </View>
                </View>

                <View style ={Styles.row}>
                    <View style = {Styles.secondRow}>
                        <View>
                            <Text style ={Styles.rowText}>Sex</Text>
                        </View>
                        <View style ={Styles.rowContainner}>
                            <Text style ={Styles.boldText}>Male</Text>
                        </View>
                    </View>
                </View>

                <View style ={Styles.row}>
                    <View style = {Styles.secondRow}>
                        <View>
                            <Text style ={Styles.rowText}>Date of Birth</Text>
                        </View>
                        <View style ={Styles.rowContainner}>
                            <Text style ={Styles.boldText}>1998-01-25</Text>
                        </View>
                    </View>
                </View>

                <View style ={Styles.row}>
                    <View style = {Styles.secondRow}>
                        <View>
                            <Text style ={Styles.rowText}>Age</Text>
                        </View>
                        <View style ={Styles.rowContainner}>
                            <Text style ={Styles.boldText}>31 years, 6 months</Text>
                        </View>
                    </View>
                </View>

                <View style ={Styles.row}>
                    <View style = {Styles.secondRow}>
                        <View>
                            <Text style ={Styles.rowText}>Status</Text>
                        </View>
                        <View style ={Styles.rowContainner}>
                            <Text style ={Styles.boldText}>Paid</Text>
                        </View>
                    </View>
                </View>

                <View style ={Styles.row}>
                    <View style = {Styles.secondRow}>
                        <View>
                            <Text style ={Styles.rowText}>Member package</Text>
                        </View>
                        
                    </View>
                </View>

                <View style={Styles.row2}>
                    <View style = {Styles.secondRow}>
                        <View>
                            <Text style ={Styles.rowX}>XXXXXXXX</Text>
                        </View>
                        
                    </View>
                </View>

                <View style={Styles.row2}>
                    <View style = {Styles.secondRow}>
                        <View>
                            <Text style ={Styles.rowX }>XXXXXXXX</Text>
                        </View>
                        
                    </View>
                </View>

                <View style={Styles.row2}>
                    <View style = {Styles.secondRow}>
                        <View>
                            <Text style ={Styles.rowText }>Remaining Period of membership</Text>
                        </View>
                        
                    </View>
                </View>

                <View style={Styles.row2}>
                    <View style = {Styles.secondRow}>
                        <View>
                            <Text style ={Styles.rowX }>2 Years 3 months 5 days (11 Nov 2017)</Text>
                        </View>
                        
                    </View>
                </View>

                <View style={Styles.row2}>
                    <View style = {Styles.secondRow}>
                        <View>
                            <Text style ={Styles.rowX }>2 Years 3 months 5 days (11 Nov 2017)</Text>
                        </View>
                        
                    </View>
                </View>

                <View style ={Styles.row}>
                    <View style = {Styles.secondRow}>
                        <View>
                            <Text style ={Styles.rowText}>Free Night</Text>
                        </View>
                        <View style ={Styles.rowContainner}>
                            <Text style ={Styles.boldText}>10</Text>
                        </View>
                    </View>
                </View>

                <View style ={Styles.specialRow}>
                    <View style = {Styles.secondRow}>
                        <View>
                            <Text style ={Styles.rowText}>Discount Night</Text>
                        </View>
                        <View style ={Styles.rowContainner}>
                            <Text style ={Styles.boldText}>10</Text>
                        </View>
                    </View>
                </View>

                
                </Content>
          </View>
        
      );
    }
  }
  export default Profile;
  
  const Styles = StyleSheet.create({
    container: {
      flex: 1
    },
    row: {
      width:'100%',
      height:50,
      borderTopWidth:1,
      alignItems:'center',
      borderColor:'#e1e1e1'
          
    },
  
    rowText: {
      fontSize: 15,
      color:'#e1e1e1',
      fontWeight :'800',
    },
    boldText: {
        color:'black',
        fontSize: 15,
        fontWeight :'bold',
           
      },
      rowContainner:{
          position:'absolute',
          right:0

      },
      secondRow:{
          width:'90%',
          height:'100%',
          justifyContent:'center'
      },
      rowX:{
        fontSize: 15,
        fontWeight:'bold',
        color:'black'   
      },
      row2:{
        width:'100%',
        height:30,
        alignItems:'center',
          
      },
      specialRow:{
        width:'100%',
        height:50,
        borderTopWidth:1,
        alignItems:'center',
        borderColor:'#e1e1e1',
        marginBottom:20
        
      }

  });