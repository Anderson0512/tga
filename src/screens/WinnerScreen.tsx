import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export function WinnerScreen(){
    return(
        <View style={styles.container}>
            <Text>Winner works!!!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#191919',
        alignItems: 'center',
        justifyContent: 'center'
    }
})