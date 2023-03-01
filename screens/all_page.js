import {Dimensions, StyleSheet, Text, View,Pressable} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

const All_page   = ({navigation}) => {
    const onnpress=() => {
        if(navigation=='home')
        navigation.navigate("home");
        else
        navigation.goBack();
    }
    return (
        <View style={styles.container}>
            <View style={styles.button}>
                <Text style={styles.heading}>All pages</Text>
                    </View>
            <View style={styles.button}>
                    </View>
            </View>
    )
}

export default All_page

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"space-evenly",
        marginTop:40,
        marginBottom:130
    },
    button:{
      width:Dimensions.get("window").width-100,
        backgroundColor:"#f5f5f5",
        justifyContent:"center",
        alignItems:"center",
        height:300,
        marginVertical:50
    },
    icon:{
        fontSize:"50%"

    },
    heading:{
        fontSize:"50%"
    }

})