import {Dimensions, StyleSheet, Text, View,Pressable} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

const Home   = ({navigation}) => {
    const onnpress=() => {
        navigation.navigate("all-page");
    }
    return (
        <View style={styles.container}>
            <Pressable  onPress={onnpress}>
                <View style={styles.button}>
                    <Text style={styles.heading}>All pages</Text>
                    <Icon style={styles.icon} name="add-outline"/>
                </View>
            </Pressable>
            <Pressable onPress={()=>navigation.push("add_page")}>
                <View style={styles.button}>
                    <Text style={styles.heading}>Add Page</Text>
                    <Icon style={styles.icon} name="arrow-forward"/>
                </View>
            </Pressable>
        </View>
    )
}

export default Home

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