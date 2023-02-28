import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.head}>
      <Text style={styles.text}>Notes </Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    head:{
        width:"100%",
        marginTop:42,
        backgroundColor:"black",
        height:80,
       alignItems:"center",
        justifyContent:"center"
    },
    text:{
        fontSize:30,
        color:"white"
    }
})