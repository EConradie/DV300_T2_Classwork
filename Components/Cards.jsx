import React from "react"
import { View, Text, Button, StyleSheet, Pressable } from "react-native"



export const MainCard = (title, text) => {
    return (
        <View style={CardStyles.container}>
            <View style={CardStyles.content}>
            <Text style={CardStyles.title}>To be Marketeers Professional!</Text>
            <Text style={CardStyles.text}>Ready for the new Challenge and new Career?</Text>
            <Pressable style={CardStyles.button} onPress={() => alert('Hello World')}><Text>Lesson 3</Text></Pressable>
            </View>
        </View>
    )
}

export const SmallCard = (title, text) => {
    return(
        <View style={SmallCardStyles.container}>
            <View style={SmallCardStyles.content}>
            <Text style={SmallCardStyles.title}>Marketing</Text>
            <Text style={SmallCardStyles.text}>4 Course</Text>
            </View>
        </View>
    )
}

const SmallCardStyles = StyleSheet.create({
    container: {
        backgroundColor: 'lightgrey',
        borderRadius: 15,
        height: 250,
        width: 162,
    },
    content:{
        margin: 15,
        gap:5,
        marginTop: 30
    },
    title: {
        fontSize: 20,
        fontWeight: '500',
    },
    text: {
        fontSize: 16,
        fontWeight: '300',
    },

})

const CardStyles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'lightgrey',
        borderRadius: 15,
    },
    content:{
        display: 'flex',
        flexDirection: 'column',
        margin: 15,
        maxWidth: 170,
        gap: 10
    },
    title: {
        fontSize: 20,
        fontWeight: '500',
    },
    text: {
        fontSize: 16,
        fontWeight: '300',
    },
    button: {
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 10,
        alignItems: 'center',
        width: 100
        
    }
})