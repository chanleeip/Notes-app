import {Dimensions, StyleSheet, Text, View, Pressable, TextInput} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

const Add_page   = ({navigation}) => {
    const oknpress=()=>{
        if(navigation=='home')
        navigation.navigate('home');
        else
            navigation.goBack();
    }
    return (
        <View style={styles.container}>
                <View style={styles.button}>
                    <Text style={{fontSize:40}}>Write the Note</Text>
                    </View>
            <View style={{backgroundColor:"pink",width:"100%"}}>
                    <TextInput style={styles.input}/>
                </View>
            <Pressable onPress={oknpress}>
                <View>
                    <Icon style={{fontSize:"80%"}} name="add"/>
                </View>
            </Pressable>
            <Pressable onPress={oknpress}>
                <View>
                    <Text style={styles.heading_1}> Go back</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default Add_page

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"space-evenly",
        alignItems:"center",
        alignContent:"center",
        marginBottom:150
    },
    button:{
        width:Dimensions.get("window").width-100,
        backgroundColor:"#f5f5f5",
        justifyContent:"center",
        alignItems:"center",
        height:60,
    },
    icon:{
        fontSize:"50%"

    },
    heading:{
        fontSize:"50%"
    },
    heading_1:{
        backgroundColor:"red",
        fontSize:"30%"
},
    input:{
    backgroundColor:"#f5f5f5",
        width:"100%",
        height:404,
        borderBottomWidth:1,
        borderTopWidth:1,
        borderLeftWidth:1,
        borderRightWidth:1
    }

})