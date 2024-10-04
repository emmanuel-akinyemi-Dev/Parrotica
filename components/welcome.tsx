import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from './header'

export default function welcome() {
  return (
    
    <View style={styles.container}>
        <Header />
        <View style={styles.container2}>
        <Text style={styles.headerText}>Hi, Welcome Back</Text>
        <Text style={styles.subText}>please login into your account</Text>
        <View style={styles.buttons}>
        <TouchableOpacity style={[styles.button,styles.button1]}>
        <Text style={styles.buttonText}>Email Address</Text>
        </TouchableOpacity >
        <TouchableOpacity style={[styles.button, styles.button2]}>
        <Text style={styles.subText}>Phone Number</Text>
        </TouchableOpacity>

        </View>

        </View>
      
    </View>
  )
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        alignItems:"center"
        
    },

    container2:{
        flex:1,
        position:'absolute',
        width:415,
        backgroundColor:"white",
        height:400,
        marginTop:160,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        alignItems:"center",
        padding:25

    },

    headerText:{
        fontWeight:"bold",
        fontSize:26,
        fontFamily:"arial black",
        color:"black"
    },

    subText:{
fontSize:12,
marginTop:5
    },

    buttons:{
  flex:1,
  flexDirection:'row',
  justifyContent:'center',
  alignContent:'center',
  marginTop:30
    },

    button:{
        flex:1,
        width:185,
        height: 30,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:4
       
      
    },

    button1:{
          backgroundColor:'#192f6a'
    },

    button2:{
        backgroundColor:'#f3f5f5'
    },

    buttonText:{
         color:'white'
    }
})