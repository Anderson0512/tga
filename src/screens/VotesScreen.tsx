import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export function VoteScreen(){
    return (
        <View style={styles.container}>
            <Text>Aqui começa a brincadeira</Text>
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