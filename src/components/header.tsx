import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface HeaderData {
    title: string,
    goBack: boolean
}

const Header = (props: HeaderData) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='transparent' barStyle='light-content'/>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 20
    },
    title:{
        color: 'white',
        fontSize: 16,
        
    }
})