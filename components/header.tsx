import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';


export default function header() {
  return (
    <View style={styles.headerStyle}>
  <LinearGradient start={{x: 1, y: 0}} end={{x: 0, y: 0}} colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
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
        justifyContent:"flex-start",
        alignItems: "center",

      },
    headerText:{
        fontFamily:'sans',
        marginTop:65,
        fontSize:20,
        color:"white"
      }

})