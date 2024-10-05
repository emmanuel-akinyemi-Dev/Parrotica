import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { assets } from '../assets/assets';


export default function header() {
  return (
    <View style={styles.headerStyle}>
  <LinearGradient start={{x: 1, y: 0}} end={{x: 0, y: 0}} colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
  <Image source={assets.logo} style={styles.logo}></Image>
  <Text style={styles.headerText}>
    Parrotica
  </Text>
  </LinearGradient>
    </View>


  )
}

const styles = StyleSheet.create({
    headerStyle:{
        flex: 1, 
        width: 420,
        height:200
    },
    linearGradient: {
        flex: 1,
        flexDirection:'row',
        justifyContent:'center',
        paddingTop:65,
        gap:5


      },
    headerText:{
        fontFamily:'sans', 
        fontSize:20,
        color:"white"
      },
      
      logo:{
        
 width:30,
 height:30
      }

})