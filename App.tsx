import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import  Header  from './components/header'
import Welcome from './components/welcome'

export default function App() {
  return (
    <SafeAreaView style={styles.container} >
      <ScrollView >
        <Welcome />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})