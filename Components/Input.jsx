import React from "react"
import { View, Text, StyleSheet, TextInput } from "react-native"
import { Ionicons } from '@expo/vector-icons';

export const Input = () => {
    return (
        <View style={InputStyle.container}>
            <TextInput
                placeholder="Search what you need"
                style={InputStyle.input}
            />
            <View style={InputStyle.Icon}>
                <Ionicons name="search" size={32} color="white" />
            </View>

        </View>
    )
}

const InputStyle = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'lightgrey',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 15,
        height: 60,
    },
    Icon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        width: 60,
        backgroundColor: 'darkblue',
        borderRadius: 15,

    },
    input: {
        paddingLeft: 15,
    }
})