import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
   
class List extends Component {
   state = {
      names: [
         {
            id: 0,
            name: 'Aun',
         },
         {
            id: 1,
            name: 'Kissa',
         },
         {
            id: 2,
            name: 'Muhammad',
         },
         {
            id: 3,
            name: 'Hassan',
         }
      ]
   }
   alertItemName = (item) => {
      alert(item.name)
   }
   render() {
      return (
         <View style = {styles.cont} >
            {
               this.state.names.map((item, index) => (
                  <TouchableOpacity
                     key = {item.id}
                     style = {styles.container}
                     onPress = {() => this.alertItemName(item)}>
                     <Text style = {styles.text}>
                        {item.name}
                     </Text>
                  </TouchableOpacity>
               ))
            }
         </View>
      )
   }
}
export default List;


const styles = StyleSheet.create ({
   cont:{
     flexDirection : 'column',
     

   },
    container: {
      padding: 10,
      marginTop: 3,
      backgroundColor: '#d9f9b1',
      alignItems: 'center',
      width: 150
   },
   text: {
      color: '#4f603c'
   }
})