
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

class PackageBooking extends Component{
    
    constructor(props){
        super(props);
        this.state={
            arr : [{
                img:require('../Photos/Rectangle2.png')
            },
            {
                img:require('../Photos/Rectangle2.png')
            },
            {
                img:require('../Photos/Rectangle285.png')
            },
            {
                img:require('../Photos/Rectangle284.png')
            }
        ]
        }
    }
    
    
    render(){

        return(
            <View style={Styles.Container}>
                <GlobalHeader 
               //       //         Points={true}
                        //        Avator={true}
                        //        leftHeading={"Exchange"}
                              twoWords={1}
                        //       SearchIcon={true}
                        //       Pencil={true}
                        //       AvatorSetting={true}
                        //       bunch={true}
                        //       HeartAndSetting={true}
                        //       RightAvatorAccount={true}
                        //       searchAndClock={true}
                               HeadingText= "Package Booking"  
                          //      avatorArrow={true}
                        //         Points2={true}
                        //         lefHeading="Points"
                        //         Points="sss"
                                 leftArrow={true}
                        // elevation={1}
                        //backgroundColor={"white"}
                        />
              <Content>
                <View style= {Styles.empty}>


                </View >

                {this.state.arr.map((data , index)=>{
                    return (
                        <View 
                        key={index} style={Styles.row}>
                    <View style={Styles.secondRow}>
                        <View style={Styles.image}>
                            <Image source={data.img}/>
                        </View>
                        <View style={Styles.textView}>
                            <Text style={Styles.rowText}>Title</Text>
                            <View style={Styles.dateStyle}>
                                <Image style={Styles.imageStyle} source={require('../Photos/calendar2.png')}/>
                                <Text style={Styles.rowDate}>02 Aug - 12 Aug 19</Text>
                            </View>
                        </View>
                        
                        
                    </View>
                </View>

                    )
                })}
                <View style={Styles.row}>

                </View>
                <View style={Styles.row}>
                    <Globalbutton  
                    //buttonwidth={'90%'}
      //borderWidth={2}
      //borderColor={'brown'}
      //fontWeight={'bold'}
      //paddingVertical={29}  using instead of Height
      backgroundColor={'#9C6A2D'}
      //borderRadius={30}
      //TextColor={'red'}
      //fontSize={20}
      //fontWeight={'bold'}
      text={"Confirm"}
      //navigation={this.props.navigation}
      //navigateTo={"RegisterMember"}
      marginBottom={20}
      //marginTop={30}
      //elevation={2}

                    />
                </View>



              </Content>

            </View>
        )
    }
}

export default PackageBooking;
  
  const Styles = StyleSheet.create({
    Container: {
      flex: 1
    },
    empty:{
        backgroundColor:'red',
        height:250
    },
    row: {
        width:'100%',
        height:90,
        borderTopWidth:1,
        alignItems:'center',
        borderColor:'#e1e1e1',
            
    },
    secondRow:{
        width:'90%',
        height:'100%',
        flexDirection:'row',
        alignItems:'center'
        
    },
    dateStyle:{
        flexDirection:'row',
        marginTop:10
    },
    rowText:{
        fontWeight:'bold',
        fontSize:20,

    },
    textView:{
        marginBottom:2,
        marginLeft:15,
        
    },
    
    rowDate:{
        marginLeft:10,
        marginTop:-2,
        color:'#9C6A2D'
    }
  

  });