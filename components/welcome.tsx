import { Image, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from './header'
import{assets}  from '../assets/assets'
import Lock_icon from '../assets/lock-svgrepo-com.svg'
import Message_icon from '../assets/email-svgrepo-com.svg'
import Cancel_icon from '../assets/icons8-cancel.svg'
import Eye_icon from '../assets/eye-off-outline-svgrepo-com.svg'
import CheckBox from "../components/checkbox"
import checkbox from '../components/checkbox'

export default function welcome() {
  return (
    
    <View style={styles.container}>
        <Header />
        <View style={styles.container2}>
        <Text style={styles.headerText}>Hi, Welcome Back</Text>
        <Text style={styles.subText}>Please login into your account</Text>
        <View style={styles.buttons}>
        <TouchableOpacity style={[styles.button,styles.button1]}>
        <Text style={styles.buttonText}>Email Address</Text>
        </TouchableOpacity >
        <TouchableOpacity style={[styles.button, styles.button2]}>
        <Text style={styles.buttonText2}>Phone Number</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.inputContainer}>
       <Message_icon width={20} />
        <TextInput style={styles.inputBox} defaultValue='Enter email address'>
        </TextInput>
        <Cancel_icon width={22}/>
        </View>

        <View style={styles.inputContainer}>
        <Lock_icon width={20} />
        <TextInput textContentType='password' style={styles.inputBox} defaultValue='Enter Password'>
        </TextInput>
        <Eye_icon width={20} />
        </View>
        <View style={styles.checkBoxContainer}>
        <CheckBox onpress={""} isChecked={true}  text={'Keep me logged in'} checkboxStyle={styles.checkBox}/>   
         <Text>forgot password</Text>
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
        padding:25,

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
  marginTop:30,
  gap:2,
    },

    button:{
        flex:1,
        width:185,
        height: 30,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:4,
       
      
    },

    button1:{
          backgroundColor:'#192f6a',
    },

    button2:{
        backgroundColor:'#f3f5f7',
    },

    buttonText:{
         color:'white',
    },

    buttonText2:{
        color:'grey',
   },

   inputBox:{
   width:265,
   
   },

   inputContainer:{
    flexDirection:'row',
    width:365,
    height:50,
    borderWidth:1,
    borderColor:'grey',
    alignItems:'center',
    gap:10,
    marginBottom:30,
    paddingLeft:10,
    borderRadius:5
   },

   inputImage:{
    width:25,
    height:25,
    color:'#192f6a',
   },

   checkBox:{

   },

   checkBoxContainer:{
 flexDirection:'row',
 margin:0,
alignItems:"center",
justifyContent:'space-between',
width:360
   }
 
})