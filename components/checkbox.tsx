import { StyleSheet, Text, View, Animated ,TouchableOpacity} from 'react-native'
import React from 'react'

export default function checkbox({
    onpress,
    isChecked,
    containerStyle,
    textStyle,
    checkboxStyle,
    text
}) {
  return (
    <View style={[styles.container, containerStyle]}>
        <TouchableOpacity style={[styles.checkbox, 
            checkboxStyle]}>
            <Animated.View />  
        </TouchableOpacity>
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        gap:10,
    },
    text:{
        fontSize:13,
    },

    checkbox:{
        borderColor:'grey',
        borderRadius:5,
        borderWidth: 1,
        height:20,
        width:20,
        
    },
    checkBoxSelected:{
        backgroundColor:'#192f6a',
       }
})